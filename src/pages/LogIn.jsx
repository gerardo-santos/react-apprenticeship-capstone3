import { PageTitle } from '../components/styles/PageTitle.styled';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { logInFirebase } from '../firebase/base';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LogIn = () => {
  const handleLogIn = async (e) => {
    e.preventDefault();
    const email = 'hello@test.com';
    const password = 'password123';
    const response = await logInFirebase(email, password);
    console.log(response);
  };

  return (
    <>
      <PageTitle>Log in</PageTitle>
      <PageContainer>
        <Form onSubmit={handleLogIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="hello@test.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password123" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </Form>
      </PageContainer>
    </>
  );
};

export default LogIn;
