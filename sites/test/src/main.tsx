import { ScopeProvider } from "r-components";
import "r-components/themes/styles/index.less";
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
