import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "app/store";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  rootElement
);
