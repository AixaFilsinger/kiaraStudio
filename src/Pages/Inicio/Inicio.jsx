import Nav from './Components/Navbar/Navbar'
import Carrousel from './Components/Header/Header'
import MainCards from './Components/MainCards/MainCards'
import MainDetails from './Components/MainDetails/MainDetalles'
import Footer from './Components/Footer/Footer'

const Inicio = () => {

  return (
    <>
     <div className="grid-layout">
          <div className="nav">
            <Nav/>
          </div>
          <div className="header">
            <Carrousel/>
          </div>
          <div className="main" >
           <MainCards/>
           <MainDetails/>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
    </>
  )
}

export default Inicio;