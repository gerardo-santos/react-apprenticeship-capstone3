import { render } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import Archives from '../pages/private/Archives';

describe('Archives', () => {
  test('renders the Archives component', () => {
    const initialState = {
      query: '',
      isAuthenticated: false,
      notes: [],
      archives: [],
      noteToEdit: {},
    };
    const { getByRole } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <Archives />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const title = getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Archives');
  });
});
