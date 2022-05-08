import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Calculator from "./components/calculator/Calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <h1>Calculadora</h1>
      <Calculator />
    </>
  </React.StrictMode>
);
