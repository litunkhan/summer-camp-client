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
import Authprobider from './Pages/Firebase/Authprobider.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Privateroute from './Pages/PrivateRoute/Privateroute.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Alluser from './Pages/Dashboard/AdminDashboard/Alluser.jsx';
import Classes from './Pages/Dashboard/AdminDashboard/Classes.jsx';
const queryClient = new QueryClient()

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
      },
      {
        path:'/dashboard',
        element: <Privateroute><Dashboard></Dashboard></Privateroute>,
        children:[
          {
            path:'alluser',
            element:<Alluser></Alluser>
          },
          {
            path:'classes',
            element:<Classes></Classes>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprobider>
   <QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />
   </QueryClientProvider>
   </Authprobider>
  </React.StrictMode>,
)
