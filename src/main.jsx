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
import Services from './Pages/Services';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Route/PrivateRoute';
import UpdateProfile from './Pages/UpdateProfile';
import DonorList from './Pages/DonorList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },
      {
        path:'updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: 'finddonor',
        element: <FindDonor></FindDonor>
      },
      {
        path: 'services',
        element: <Services></Services>
      },
      {
        path: 'donorList/:bG',
        element: <DonorList></DonorList>,
        loader: ({params})=> fetch(`https://blood-management-server-py1oktes5-md-tanvir-hasans-projects.vercel.app/${params.bG}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
