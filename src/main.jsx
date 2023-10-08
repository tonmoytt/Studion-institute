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
import Showfeaturesdata from './Home/Featured/Showfeaturesdata';
import Anotherpageshow from './Home/Featured/Anotherpageshow';
import Error from './Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/stored.json'),
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
      {
        path:'/feature/:id',
        element:<Anotherpageshow></Anotherpageshow>,
        loader: () => fetch('/stored.json'),
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
