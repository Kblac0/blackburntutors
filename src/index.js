import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tutoring from './pages/Tutoring';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import About from './pages/About';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Tutoring",
    element: <Tutoring />,
  },
  {
    path: "Booking",
    element: <Booking />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "About",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);