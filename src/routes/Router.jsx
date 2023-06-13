import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shared/Secret/Secret";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/menu",
            element: <Menu/>
        },
        {
          path: "/order/:category",
          element: <Order/>
        },
        {
          path: "/order",
          element: <Order/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <SignUp/>
        },
        {
          path: "/secret",
          element: <PrivateRoute>
            <Secret/>
          </PrivateRoute>
        }
      ], 
    },
    {
      path: "/dashboard",
      element:<PrivateRoute><Dashboard/></PrivateRoute>,
      children:[
        {
          path: "mycart",
          element:<MyCart/>
        }
      ]
    }
  ]);