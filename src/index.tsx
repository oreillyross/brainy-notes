import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Router>
    <App />
    </Router>
);
