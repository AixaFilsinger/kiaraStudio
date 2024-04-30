import React from 'react';
import '../Footer/Footer.css';
import logotipo from '../../Assets/logofull.png'

function Footer() {
  return (
    <footer>
        <div className="logo-container">
      <img src={logotipo} alt="Kiara Studio logo" className="logo" />
    </div>
      <div className='redes'></div>
      <div className='text1'></div>
      <div className='text2'></div>
    </footer>
  );
}

export default Footer;