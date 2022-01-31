import { render, fireEvent } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import AddNoteForm from '../components/AddNoteForm';

describe('add note form', () => {
  test('render add note form', () => {
    const initialState = {};
    render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <AddNoteForm />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
  });

  test('change input values', () => {
    const initialState = {};
    const { getByRole } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <AddNoteForm />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const noteInput = getByRole('textbox');
    expect(noteInput).toBeInTheDocument();
    fireEvent.change(noteInput, { target: { value: 'my note content' } });
    expect(noteInput.value).toBe('my note content');
  });

  test('trying to add empty values', () => {
    const initialState = {};
    const { getByRole, getByText } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <AddNoteForm />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const noteInput = getByRole('textbox');
    const addNoteBtn = getByText('Add note');
    expect(noteInput).toBeInTheDocument();
    fireEvent.change(noteInput, { target: { value: '' } });
    expect(addNoteBtn).toHaveAttribute('disabled');
  });

  test('trying to add note with text', () => {
    const initialState = {};
    const { getByRole, getByText } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <AddNoteForm />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const noteInput = getByRole('textbox');
    const addNoteBtn = getByText('Add note');
    expect(noteInput).toBeInTheDocument();
    fireEvent.change(noteInput, { target: { value: 'this is my text' } });
    expect(addNoteBtn).not.toHaveAttribute('disabled');
  });
});
