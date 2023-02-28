import  ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./routes/App";
import './index.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const Index = () => {
    return(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Index />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

