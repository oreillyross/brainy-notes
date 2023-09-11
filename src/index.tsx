import { createRoot } from "react-dom/client";
import "styles/index.css";
import App from "./App";
// import { AuthProvider } from "contexts/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = createRoot(document.getElementById("root") as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <App/>
);
