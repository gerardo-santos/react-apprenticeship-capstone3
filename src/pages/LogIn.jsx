import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../components/styles/PageTitle.styled';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { logInFirebase } from '../firebase/base';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogIn = async (event) => {
    event.preventDefault();
    const response = await logInFirebase(email, password);
    if (response.error) {
      setErrorMessage(response.error);
      setShowError(true);
      return;
    }
    setShowError(false);
    setErrorMessage('');
    navigate('/');
  };

  return (
    <>
      <PageTitle>Log in</PageTitle>
      <PageContainer>
        <Form onSubmit={handleLogIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="hello@test.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password123"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          {showError && <Alert variant="danger">{errorMessage}</Alert>}
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </Form>
      </PageContainer>
    </>
  );
};

export default LogIn;
