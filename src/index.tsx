import { createRoot } from "react-dom/client";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "app/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
