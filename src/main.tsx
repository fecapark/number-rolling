import React from "react";
import ReactDOM from "react-dom/client";
import { Roller } from "./lib";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Roller value={12000} suffix="원" />
      <Roller value={120012120} rollDuration={10} suffix="원" />
    </>
  </React.StrictMode>
);
