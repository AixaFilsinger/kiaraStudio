import './Navbar.css'
import React from 'react'
import Logo from '../../Assets/Kiara Studio LOGO.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Encabezado() {
  return (
    <nav className="nav">
    <div className="logo-container">
      {/* Utiliza la imagen importada como el src del elemento img */}
      <img src={Logo} alt="Kiara Studio logo" className="logo" />
    </div>
    <div className='buttons-container'>
        <Link to="/Inicio" className='button-custom'>Inicio</Link>
        <Link to="/Servicios" className='button-custom'>Servicios</Link>
        <Link to="/Reservas" className='button-custom'>Reservas</Link>
        <Link to="/Cursos" className='button-custom'>Cursos</Link>
        <Link to="/Contacto" className='button-custom'>Contacto</Link>
        <Link to="/Nosotros" className='button-custom'>Nosotros</Link>
        <Link to="/Admin" className='button-custom'>Admin</Link>      
    </div>
  </nav>
  );
}

export default Encabezado;
