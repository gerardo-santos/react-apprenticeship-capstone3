import { signOutFirebase } from '../firebase/base';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  const handleSignOut = async () => {
    const response = await signOutFirebase();
    console.log(response);
  };
  return (
    <Navbar bg="warning" expand="false">
      <Container>
        <Navbar.Brand href="#home">My Notes App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Notes
            </Nav.Link>
            <Nav.Link as={Link} to="archives">
              Archives
            </Nav.Link>
            <Nav.Link as={Link} to="log-in" onClick={handleSignOut}>
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
