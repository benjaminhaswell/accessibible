import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './demo_components/App.jsx'
import './index.css'
import ErrorPage from './demo_components/ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLink from './demo_components/HomeLink.jsx'
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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <HomeLink/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
