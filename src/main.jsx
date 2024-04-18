import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Phone from './Phone'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [
  {
    path: "/",
    element: <Phone />
  },
  {
    path: "*",
    element: <Phone />
  }
]
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)