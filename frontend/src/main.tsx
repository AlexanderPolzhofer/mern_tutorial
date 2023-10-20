import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./main.css";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: undefined,
    errorElement: <ErrorBoundary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
