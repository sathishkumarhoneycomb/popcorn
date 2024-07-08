import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import StarRating from "./StarRating.jsx";
import TestExpander from "./TestExpander.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    <StarRating />
    <TestExpander>a b c d e f g h i j k l m n o p q r s t u v</TestExpander>
  </React.StrictMode>
);
