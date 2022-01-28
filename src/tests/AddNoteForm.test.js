import { render, fireEvent } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import AddNoteForm from '../components/AddNoteForm';

describe('add note form', () => {
  test('render add note form', () => {
    const initialState = {};
    const { getByRole } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <AddNoteForm />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const title = getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Add a Note');
    const noteInput = getByRole('textbox');
    expect(noteInput).toBeInTheDocument();
    fireEvent.change(noteInput, { target: { value: 'my note content' } });
    expect(noteInput.value).toBe('my note content');
  });
});
