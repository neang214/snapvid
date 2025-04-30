import { createBrowserRouter } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import HowToUsePage from "./pages/HowToUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermOfServicePage";
import NotFoundPage from "./pages/NotFoundPage";
import App from "./App";

const routes = createBrowserRouter([
    { path:'/', element:<App/> },
    { path:'/how-to-use', element:<HowToUsePage/> },
    { path:'/about', element:<AboutUsPage/> },
    { path:'/contact', element:<ContactUsPage/> },
    { path:'/privacy', element:<PrivacyPolicyPage/> },
    { path:'/terms', element:<TermsOfServicePage/> },
    { path:'/*', element:<NotFoundPage/> },
])

export default routes;