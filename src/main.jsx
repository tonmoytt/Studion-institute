import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root/Root';
import Home from './Home/Home';
import Login from './Authentiction/Login/Login';
import Register from './Authentiction/Login/Register/Register';
import Store from './Navbar/Store/Store';
import About from './Navbar/About/About';
import Provider from './Authentiction/Login/provider/Provider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/store',
        element:< Store></Store>
      },
      {
        path:'/about',
        element:<About></About>
      },
      
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
