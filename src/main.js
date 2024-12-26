import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { store } from "./app/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(Provider, { store: store, children: _jsx(App, {}) }) }) }));
}
else {
    throw new Error("Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.");
}
