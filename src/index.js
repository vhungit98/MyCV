import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18next";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./stores/context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div>Loading ...</div>}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
