import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FoodContextProvider from "./foodContext/FoodContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
  </React.StrictMode>,
);
