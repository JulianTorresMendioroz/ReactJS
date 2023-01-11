import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../components/CartWidget'
import { Link } from 'react-router-dom';
import '../components/NavBar.css'

function NavBar() {
  return (
    <>
      <Navbar  bg="dark" variant="dark">
        <Container>
          <Link to='/'>
             <img className="logoNavBar" src='https://d2r9epyceweg5n.cloudfront.net/stores/001/195/273/themes/common/logo-69471556-1624410172-b3794639a270ac96f31cfd540a6318761624410172-320-0.png?0' alt="logoEcommerce" /> 
          </Link>
          <Nav className="navbar-nav ml auto">
            <Link to='/'>
            <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to='/contact'>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            </Link>
            <Link to='/us'>
            <Nav.Link className="weNav" href="#we">Nosotros</Nav.Link> 
            </Link>
            <Link to='/cart'>
            < CartWidget />
            </Link>
          </Nav>
        </Container>
      </Navbar>
      
      </>
  );
}

export default NavBar;