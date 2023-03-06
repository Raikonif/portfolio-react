import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AxiosInterceptor } from "./interceptor/axios.interceptors";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
