// @ts-ignore: side-effect import for CSS module
import "./index.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(<App />);