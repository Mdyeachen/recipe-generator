import { createRoot } from "react-dom/client"
import Apps from "./Component/apps"
import "./main.css"

const root = createRoot(document.getElementById("root"));

root.render(
  <Apps />
)