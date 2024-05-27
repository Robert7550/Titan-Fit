import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Hero from './screencomponents/Hero';
import About from './screencomponents/About';
import Classes from './screencomponents/Classes';

import Foods from './screencomponents/Foods';
import Payment from './Payment/Payment';
import Contact from './Contact/Contact';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' index={true} element={<Hero/>} />
      {/* <Route path='#' element={<About/>} /> 
      <Route path='#' element={<Classes/>} /> */}
      <Route path='/foods' element={<Foods/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/contact' element={<Contact/>} />


    </Route>

  )
)





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
