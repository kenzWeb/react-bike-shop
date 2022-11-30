import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./Components/App";
import { BrowserRouter, BrowserRouter as Router, HashRouter } from "react-router-dom";
import ScrollToTop from "./Utils/scrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
			<ScrollToTop/>
      <App />
    </HashRouter>
  </React.StrictMode>
);
