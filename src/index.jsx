import  ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./routes/App";
import './index.css'



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