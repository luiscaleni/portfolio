import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import IphoneScreen from './IphoneScreen'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [
  {
    path: "/",
    element: <IphoneScreen />
  },
  {
    path: "*",
    element: <IphoneScreen />
  }
]
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)