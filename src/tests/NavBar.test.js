import { render } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  test('renders the NavBar component', () => {
    const initialState = {};
    render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
  });
});
