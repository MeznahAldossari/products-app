import React from 'react'
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Mainhome from '../components/Mainhome';
import Profile from '../components/Profile';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Choose from '../components/Choose';
import ProductInfo from '../components/ProductInfo';

 

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
          
        },
        {
            path: "/login",
            element: <Login/>,
            
          },
          {
            path: "/signup",
            element: <Signup/>,
            
          },
          {
            path: "/photo",
            element: <Choose/>,
            
          },
          {
            path: "/mainhome/:id",
            element: <Mainhome/>,
            
          },
          {
            path: "/profile/:id",
            element: <Profile/>,
            
          },{
            path: "/productInfo/:id",
            element: <ProductInfo/>,

          }
      ]);
  return <RouterProvider router={router} />
    
}

export default Router
