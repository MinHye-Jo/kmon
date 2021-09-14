import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
