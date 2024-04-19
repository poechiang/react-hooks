import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScopeProvider } from '../src/components/index.ts';
import './../src/assets/styles/index.less';
import App from './App.tsx';
// import "./index.css";

ReactDOM.createRoot(document.querySelector('app-root')!).render(
  <React.StrictMode>
    <ScopeProvider>
      <App />
    </ScopeProvider>
  </React.StrictMode>,
);
