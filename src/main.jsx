import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './demo_components/App.jsx'
import './index.css'
import ErrorPage from './demo_components/ErrorPage.jsx'
import ColorContrast from './demo_components/pages/ColorContrast.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Keyboard from './demo_components/pages/Keyboard.jsx';

// Declare routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/keyboard",
    element: <Keyboard/>
  },
  {
    path: "/contrast",
    element: <ColorContrast/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
