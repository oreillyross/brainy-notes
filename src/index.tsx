import { createRoot } from "react-dom/client";
import "styles/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { AuthProvider } from "contexts/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = createRoot(document.getElementById("root") as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
        <App />
      {/* </AuthProvider> */}
    </QueryClientProvider>
  </Router>
);
