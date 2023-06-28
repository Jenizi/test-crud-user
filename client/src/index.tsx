import Router from "./routes/router";
import { createRoot } from "react-dom/client";
import "./global.css";

const domNode = document.getElementById("main-system")!;
const root = createRoot(domNode);
root.render(<Router />);
