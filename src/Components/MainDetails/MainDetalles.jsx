import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../MainDetails/MainDetalles.css'




function MainDetails(){
return(
    <div className='title-main'>
    <h2>Nuestros horarios</h2>
    <div className='subtitle'>Lunes a Viernes
    <div className='minisub'>10 a 20hs</div>
    </div>
    <div className='subtitle'>Sábados
    <div className='minisub'>10 a 20hs</div>
    </div>
    <div className='subtitle'>Domingos y feriados
    <div className='minisub'> CERRADO</div>
    </div>
    <h2 style={{position: 'relative', top: '50px'}}>¿Dónde nos encontramos?</h2>
    <div className='subtitle' style={{position: 'relative', top: '80px'}}>Combate de las piedras 812, Barrio sur
    </div>
    </div>
);
}

export default MainDetails; 