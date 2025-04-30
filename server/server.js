const express = require('express');
const cors = require('cors');
const { execFile } = require('child_process');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const reactBuildPath = '/home/minato/React-App/snapvid/client/build';

app.use(express.static(reactBuildPath));


const runYtDlp = (url) => {
    return new Promise((resolve, reject) => {
        const ytdlpArgs = [
            '--dump-json',
            '--no-warnings',
            '--no-playlist',
            '-f', 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
            url
        ];

        execFile('yt-dlp', ytdlpArgs, (error, stdout, stderr) => {
            if (error) {
                const err = new Error(`yt-dlp execution failed: ${error.message}`);
                err.stderr = stderr;
                err.code = error.code;
                return reject(err);
            }

            resolve(stdout);
        });
    });
};

app.get('/get-options', async (req, res) => {
    const { url } = req.query;

    if (!url || typeof url !== 'string') {
        return res.status(400).json({ message: 'Missing or invalid Facebook video URL.' });
    }

    console.log(`Received options request for URL: ${url}`);

    try {
        const stdout = await runYtDlp(url);
        const videoMetadata = JSON.parse(stdout);

        const videoTitle = videoMetadata.title || 'Untitled Video';

        const thumbnailUrl = videoMetadata.thumbnail || (videoMetadata.thumbnails && videoMetadata.thumbnails.length > 0 ? videoMetadata.thumbnails.reduce((best, current) => (best.width * best.height > current.width * current.height ? best : current), videoMetadata.thumbnails[0]).url : null);

        const downloadOptions = [];

        if (videoMetadata.formats) {
            videoMetadata.formats.forEach(format => {
                const isDirectUrl = format.url && !format.fragment_base_url;
                const isStreamableProtocol = format.protocol !== 'm3u8_native' && format.protocol !== 'http_dash_segments' && format.protocol !== 'rtmp' && format.protocol !== 'dash';
                const hasStream = format.vcodec !== 'none' || format.acodec !== 'none';
                if (isDirectUrl && isStreamableProtocol && hasStream) {
                    let quality = 'Unknown';
                    if (format.height) {
                        quality = `${format.height}p`;
                    } else if (format.format_note) {
                         quality = format.format_note;
                    } else if (format.quality) {
                         quality = format.quality;
                    }

                    const formatExt = format.ext || 'mp4';
                    const size = format.filesize ? `${(format.filesize / (1024 * 1024)).toFixed(2)}MB` : (format.filesize_approx ? `~${(format.filesize_approx / (1024 * 1024)).toFixed(2)}MB` : null);

                    const isProblematicName = quality.includes('--') || formatExt.includes('--');
                    if (!isProblematicName) {
                         downloadOptions.push({
                             quality: quality,
                             url: format.url,
                             format: formatExt.toUpperCase(),
                             size: size
                         });
                    }
                }
            });

             downloadOptions.sort((a, b) => {
                 const qualityA = parseInt(a.quality);
                 const qualityB = parseInt(b.quality);
                 if (!isNaN(qualityA) && !isNaN(qualityB)) {
                     return qualityB - qualityA;
                 }
                 return 0;
             });

              const uniqueDownloadOptions = Array.from(new Set(downloadOptions.map(opt => opt.url)))
                  .map(url => downloadOptions.find(opt => opt.url === url));

            console.log('Video Metadata from yt-dlp:', videoMetadata);
            console.log('Extracted Video Title:', videoTitle);

             res.status(200).json({
               title: videoTitle,
               thumbnailUrl: thumbnailUrl,
               options: uniqueDownloadOptions
             });

        } else {
           console.warn(`yt-dlp output for ${url} contained no formats.`);
           res.status(404).json({ message: 'No downloadable formats found for this video.' });
        }

    } catch (error) {
      console.error('Error in /get-options handler:', error);
      let errorMessage = 'Failed to get video information.';
      let errorDetails = error.message;

      if (error.code === 'ENOENT') {
          errorMessage = 'Error: yt-dlp command not found. Make sure yt-dlp is installed and in your system PATH.';
          errorDetails = error.message;
      } else if (error.stderr) {
          errorMessage = `Failed to get video information from source. Details: ${error.stderr.substring(0, 200)}`;
          errorDetails = error.stderr;
      } else if (error instanceof SyntaxError) {
          errorMessage = 'Failed to parse video data from source.';
          errorDetails = error.message;
      }

      res.status(500).json({ message: errorMessage, errorDetails: errorDetails });
    }
});

app.get('/download-file', async (req, res) => {
    const { url, filename = 'facebook_video.mp4' } = req.query;

    if (!url || typeof url !== 'string') {
        return res.status(400).json({ message: 'Missing or invalid video file URL.' });
    }

    console.log(`Received file download request for URL: ${url}`);

    try {
        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream'
        });

        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        if (response.headers['content-type']) {
             res.setHeader('Content-Type', response.headers['content-type']);
        }

        response.data.pipe(res);

        response.data.on('error', (err) => {
            console.error('Error during video stream piping:', err);
            if (!res.headersSent) {
                res.status(500).json({ message: 'Failed to stream video file.' });
            } else {
                 res.end();
            }
        });

         response.data.on('end', () => {
             console.log(`Finished streaming file from ${url}`);
         });

    } catch (error) {
        console.error('Error fetching or streaming video file:', error);

        let errorMessage = 'Failed to download video file.';
        if (error.response) {
             errorMessage = `Failed to fetch video file: Server responded with status ${error.response.status}`;
        } else if (error.request) {
             errorMessage = 'Failed to fetch video file: No response received from source.';
        } else {
             errorMessage = `Failed to fetch video file: ${error.message}`;
        }

        if (!res.headersSent) {
             res.status(500).json({ message: errorMessage });
        } else {
             res.end();
        }
    }
});

app.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example API route.' });
});

app.get(/^(?!.*\.(\w+)$).*$/, (req, res) => {
  res.sendFile(path.join(reactBuildPath, 'index.html'));
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Unexpected server error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Facebook Downloader server running on http://localhost:${PORT}`);
});
