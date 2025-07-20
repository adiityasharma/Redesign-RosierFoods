import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import OurStory from './pages/OurStory.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Community from './pages/Community.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <Shop />,
      },
      {
        path: "/ourstory",
        element: <OurStory />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
