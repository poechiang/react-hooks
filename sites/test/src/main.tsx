import { ScopeProvider } from "r-styled";
import "r-styled/themes/styles/index.less";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";

ReactDOM.createRoot(document.querySelector("app-root")!).render(
  <React.StrictMode>
    <ScopeProvider>
      <App />
    </ScopeProvider>
  </React.StrictMode>
);
