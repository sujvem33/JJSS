import "./index.css";

// IMPORT REACT
import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";


ReactDOM.createRoot(document.querySelector("#root")).render(
  <Router>
    <App />
  </Router>
);