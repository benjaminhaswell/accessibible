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
import AltText from './demo_components/pages/AltText.jsx'

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
  },
  {
    path: "/alt-text",
    element: <AltText/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
