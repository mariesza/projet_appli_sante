import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from './components/Signin';
import ErrorPage from "./components/ErrorPage";
import Banner from './components/Banner.js';
import Master from './components/Master.js'
import MyComponent from './components/test.js'

const router = createBrowserRouter([
{
  path: "/",
  element: <Banner />,
  errorElement: <ErrorPage />,
},
{
  path: "/test",
  element: <MyComponent/>,
  errorElement: <ErrorPage />,
},

{
  path: "/auth/signup",
  element: <Signup />,
  errorElement: <ErrorPage />,
},
{ path : '/auth/signin',
  element: <Signin />,
  errorElement: <ErrorPage />,
}
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
