import ReactDOM from "react-dom/client";
import "./main.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Root } from "./pages/Root/Root.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary.tsx";
import { RecipesOverviewMapper } from "./pages/RecipesOverviewMapper/RecipesOverviewMapper.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Root />}>
        <Route element={<Home />} path="/" />
        <Route element={<RecipesOverviewMapper />} path="/recipes" />
      </Route>
      <Route element={<ErrorBoundary />} path="*" />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
