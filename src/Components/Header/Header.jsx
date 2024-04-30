import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import banner from '../../Assets/Banner.png'
import '../Header/Header.css'

function Carrousel() {
    return (
        <Carousel fade controls={false} style={{position: 'relative', bottom: '350px'}}>
          <Carousel.Item>
          <img
          className="d-block w-100"
          src={banner} 
        />
          </Carousel.Item>
        </Carousel>
      );
  }

export default Carrousel;