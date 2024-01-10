import { createRoot } from "react-dom/client";
import App from "./App";
import "styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { AuthProvider } from "contexts/Auth";

const root = createRoot(document.getElementById("root") as HTMLElement);

// const queryClient = new QueryClient();

root.render(<App />);
