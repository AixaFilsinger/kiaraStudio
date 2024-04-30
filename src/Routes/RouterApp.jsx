import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import App from "../App"
import ContactoPage from "../Pages/Contactos/Contactos"



const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Inicio" element={<App />} />
        <Route path="/Contacto" element={<ContactoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;