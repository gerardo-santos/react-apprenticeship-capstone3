import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { signOutFirebase } from '../firebase/base';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import AuthenticatedLinks from './AuthenticatedLinks';

const NavBar = () => {
  const { dispatch, isAuthenticated } = useContext(GlobalContext);
  const handleSignOut = async () => {
    const response = await signOutFirebase();
    if (response.error) {
      alert(response.error);
      return;
    }
    dispatch({ type: 'SIGN_OUT' });
  };
  return (
    <Navbar bg="warning" expand="false">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Notes App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated ? (
              <AuthenticatedLinks handleSignOut={handleSignOut} />
            ) : (
              <Nav.Link>Log in</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
