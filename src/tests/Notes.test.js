import { render } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import Notes from '../pages/private/Notes';
import PrivateRoute from '../components/PrivateRoute';

describe('Notes', () => {
  test('renders the Notes component', () => {
    const notesList = [
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
      isAuthenticated: true,
      notes: notesList,
      archives: [],
      noteToEdit: {},
    };

    const { getByRole, getAllByRole, getByText } = render(
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

    const btn = getAllByRole('button');
    expect(btn[0]).toBeInTheDocument();
    expect(btn[0].textContent).toBe('Create a note');

    const note1text = getByText('note-1');
    expect(note1text.textContent).toBe('note-1');

    const note2text = getByText('note-2');
    expect(note2text.textContent).toBe('note-2');
  });
});
