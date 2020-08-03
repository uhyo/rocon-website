import React from "react";
import { unstable_createRoot } from "react-dom";
import { App } from "./App";

const root = document.querySelector("body > main");
if (root) {
  unstable_createRoot(root).render(<App />);
}
