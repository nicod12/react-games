import  ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./routes/App";
import './index.css'
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";



const Index = () => {
    return(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Index />)

serviceWorkerRegistration.register({
    onUpdate: async (registration) => {
     // We execute this code if there is a new version of our application
    // Details in: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
      if (registration && registration.waiting) {
        await registration.unregister();
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
       

    // Unregister the SW to refresh the page and get the new version. Which allows the browser to download the new one and invalidate the cache it had previously.
        window.location.reload();
      }
    },
  });