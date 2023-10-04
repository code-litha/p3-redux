import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movies",
    element: <MoviePage />,
  },
]);

export default router;
