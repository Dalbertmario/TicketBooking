import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignPage from './pages/SignPage'
import { Toaster } from 'react-hot-toast';
import AppLayout from './pages/AppLayout';
import Dashboard from './pages/Dashboard';
import EventDetails from './pages/EventDetails';
import CheckoutPage from './pages/CheckoutPage';
import Bookingsfront from './pages/Bookingsfront';
import CategoryDisplay from './pages/CategoryDisplay';
import Userpage from './pages/Userpage';
import AllEvents from './pages/AllEvents';


export default function App() {

const route = createBrowserRouter([{
  path:'/signUp',element:<SignUp/>
},
{ path:'/signIn',element:<SignPage/>},
{element:<AppLayout/>,children:[
  {path:'/',element:<Dashboard/>},
  {path:'/event/:id',element:<EventDetails/>},
  {path:'/checkout/:id',element:<CheckoutPage/>},
  {path:'/bookings',element:<Bookingsfront/>},
  {path:'/category/:cat',element:<CategoryDisplay/>},
  {path:'/profile',element:<Userpage/>},
  {path:'/allevent',element:<AllEvents/>}
]}
])
  return (
    <div>
     <RouterProvider router={route}/>
     <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 2000 },
          error: { duration: 2000 },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'gray',
            color: 'white',
          },
        }}
      />
    </div>
  )
}
