import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/order/Order/Order";


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
        }
      ]
    },
  ]);