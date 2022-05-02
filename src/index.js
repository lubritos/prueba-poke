import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Listado from "./listado";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Listado />
  </StrictMode>
);
