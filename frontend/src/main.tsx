import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { NavbarWrapper } from "./pages/NavbarWrapper/NavbarWrapper.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { LoginModal } from "./components/Modal/Modal.tsx";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<NavbarWrapper />}>
        <Route element={<Home />} path="/" />
        <Route element={<App />} path="/recipes" />
        <Route element={<LoginModal modalTitle="Login" />} path="/login" />
      </Route>
      <Route element={<ErrorBoundary />} path="*" />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
