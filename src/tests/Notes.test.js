import { render } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import Notes from '../pages/private/Notes';
import PrivateRoute from '../components/PrivateRoute';

describe('Notes', () => {
  test('renders the Notes component', () => {
    const initialState = {
      query: '',
      isAuthenticated: true,
      notes: [],
      archives: [],
      noteToEdit: {},
    };
    const { getByRole } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <PrivateRoute>
            <Notes />
          </PrivateRoute>
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const title = getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Notes');

    const btn = getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn.textContent).toBe('Create a note');
  });
});
