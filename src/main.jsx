import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Homes/Home.jsx';
import Instructors from './Pages/Instructors/Instructors.jsx';
import LoginPage from './Pages/Login/Login.jsx';
import Registration from './Pages/SignUp/Registration.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/instructors',
        element:<Instructors></Instructors>
      },
      {
        path:'/login',
        element:<LoginPage></LoginPage>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
