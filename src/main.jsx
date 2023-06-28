import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { SobreMim } from "./components/SobreMim.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <SobreMim />
  </React.StrictMode>
);
