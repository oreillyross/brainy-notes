import { createRoot } from "react-dom/client";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "app/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import UnAuthenticatedApp from "./UnAuthenticatedApp";
if (process.env.NODE_ENV === "development") {
  require("./api/client");
}

const root = createRoot(document.getElementById("root") as HTMLElement);
const user = null;

root.render(
  <Provider store={store}>
    {user ? <Router><App /></Router> : <UnAuthenticatedApp />}
  </Provider>
);
