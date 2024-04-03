import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Personal from "./components/Personal.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
  <App />
  </ThemeProvider>
 </React.StrictMode>
);
