import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import History from "./components/Navigation/History.jsx"
import Compare from './components/Navigation/Compare.jsx'
import Favorites from './components/Navigation/Favorites.jsx'
import Log from './components/Navigation/Log.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/compare",
    element: <Compare />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/log",
    element: <Log />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
