import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './Common/Cart.jsx'
import Login from './Common/Login.jsx'
import ContextApi from './Contest/ContextApi.jsx'
import Registration from './Registration.jsx'
import ContactUs from './ContactUs.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let routing = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/Registration-form',
    element:<Registration/>
  },
  {
    path:'/Contact-us',
    element:<ContactUs/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextApi>
   <RouterProvider router={routing}/>
   </ContextApi>
 
  </React.StrictMode>,
)
