import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProduct/AllProducts";
import Blog from "../Pages/Blog/Blog";
import Login from "../Shared/Login";
import SingUp from "../Shared/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allProduct",
        element: <AllProducts />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SingUp />,
      },
    ],
  },
]);

export default router;
