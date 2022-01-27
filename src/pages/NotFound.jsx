import { PageTitle } from '../components/styles/PageTitle.styled';
import { PageContainer } from '../components/styles/PageContainer.styled';
import { Button } from '../components/styles/Button.styled';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <PageTitle>Not Found Page</PageTitle>
      <PageContainer>
        <p>The page you tried to enter does not exist.</p>
        <Link to="/">
          <Button>Go to main page</Button>
        </Link>
      </PageContainer>
    </div>
  );
};

export default NotFound;
