import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Profile from './Pages/Profile';
import FindDonor from './Pages/FindDonor';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path:'finddonor',
        element: <FindDonor></FindDonor>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
