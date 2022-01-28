import { render, screen } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

describe('NotFound', () => {
  test('renders the NotFound component', () => {
    const initialState = {};
    render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const title = screen.getByText('Not Found Page');
    expect(title).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Go to main page');
  });
});
