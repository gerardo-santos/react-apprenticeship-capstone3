import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';

const AuthenticatedLinks = ({ handleSignOut }) => {
  return (
    <>
      <Nav.Link as={Link} to="/">
        Notes
      </Nav.Link>
      <Nav.Link as={Link} to="archives">
        Archives
      </Nav.Link>
      <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
    </>
  );
};

AuthenticatedLinks.propTypes = {
  handleSignOut: PropTypes.func,
};

export default AuthenticatedLinks;
