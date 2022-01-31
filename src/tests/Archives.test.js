import { render } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import Archives from '../pages/private/Archives';

describe('Archives', () => {
  test('renders the Archives component', () => {
    const archivesList = [
      {
        id: 1,
        noteText: 'note-1',
        color: '#112233',
      },
      {
        id: 2,
        noteText: 'note-2',
        color: '#445566',
      },
    ];

    const initialState = {
      query: '',
      isAuthenticated: false,
      notes: [],
      archives: archivesList,
      noteToEdit: {},
    };
    const { getByRole, getByText } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <Archives />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const title = getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Archives');

    const archive1text = getByText('note-1');
    expect(archive1text.textContent).toBe('note-1');

    const archive2text = getByText('note-2');
    expect(archive2text.textContent).toBe('note-2');
  });
});
