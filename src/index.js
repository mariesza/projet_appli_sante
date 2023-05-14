import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from "./components/Signup";
import ErrorPage from "./components/ErrorPage";
import Utilisateur from "./components/Compte";
import Banner from './components/Banner.js';
import Master from '.components/Master.js'

const router = createBrowserRouter([
{
  path: "/",
  element: <Banner />,
  errorElement: <ErrorPage />,
},
{ 
  path: "/profile/:id",
  element: <Utilisateur />,
},
{
  path: "/creation-de-compte",
  element: <Signup />,
  errorElement: <ErrorPage />,
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
