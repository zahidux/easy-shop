import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProduct/AllProducts";
import Blog from "../Pages/Blog/Blog";
import SingUp from "../Shared/SingUp";
import ProductsDetails from "../Pages/Home/ProductsDetails";
import EditProfile from "../Shared/Navbar/EditProfile";
import Login from "../Shared/Login";
import PageNotFound from "../Components/PageNotFound";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddItems from "../Pages/Dashboard/AddItems";
import MyItems from "../Pages/Dashboard/MyItems";
import EditProducts from "../Pages/Dashboard/EditProducts";

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
        path: "/productsDetails/:id",
        element: <ProductsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "dashboard",
        element: (
          <PrivetRoute>
            <Dashboard />
          </PrivetRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SingUp />,
      },
      {
        path: "editProfile",
        element: <EditProfile />,
      },
      {
        path: "addItems",
        element: <AddItems />,
      },
      {
        path: "myItems",
        element: <MyItems />,
      },
      {
        path: "/editProducts/:id",
        element: <EditProducts />,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
