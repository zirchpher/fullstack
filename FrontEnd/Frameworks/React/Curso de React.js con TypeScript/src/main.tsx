import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

const domNode = document.getElementById("root") as HTMLElement;

// create a root
const root = createRoot(domNode);

//render app to root
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
