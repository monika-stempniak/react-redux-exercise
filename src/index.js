import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./style/main.scss";

import App from "./App/App";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
