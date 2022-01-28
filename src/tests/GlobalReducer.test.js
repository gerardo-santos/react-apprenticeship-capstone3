import { globalReducer } from '../context/GlobalReducer';

describe('Global Reducer', () => {
  test('can log in correctly', () => {
    const initialState = {
      query: '',
      isAuthenticated: false,
      notes: [],
      archives: [],
      noteToEdit: {},
    };

    const loggedIn = globalReducer(initialState, {
      type: 'LOG_IN',
    });
    expect(loggedIn.isAuthenticated).toBe(true);
  });
  test('can sign out correctly', () => {
    const initialState = {
      query: '',
      isAuthenticated: true,
      notes: [],
      archives: [],
      noteToEdit: {},
    };

    const signedOut = globalReducer(initialState, {
      type: 'SIGN_OUT',
    });
    expect(signedOut.isAuthenticated).toBe(false);
  });
  test('can create note correctly', () => {
    const initialState = {
      query: '',
      isAuthenticated: true,
      notes: [],
      archives: [],
      noteToEdit: {},
    };

    const noteCreated = globalReducer(initialState, {
      type: 'CREATE_NOTE',
      payload: { id: 1, textContent: 'my note', color: '#3415ae' },
    });
    expect(noteCreated.notes.length).toBe(1);
  });
  test('can select edit note correctly', () => {
    const initialState = {
      query: '',
      isAuthenticated: true,
      notes: [],
      archives: [],
      noteToEdit: {},
    };

    const selectedNote = globalReducer(initialState, {
      type: 'SELECT_NOTE_TO_EDIT',
      payload: { id: 1, textContent: 'my note', color: '#3415ae' },
    });
    expect(selectedNote.noteToEdit).toHaveProperty('color');
  });
  test('can add note to archives correctly', () => {
    const initialState = {
      query: '',
      isAuthenticated: true,
      notes: [{ id: 1, textContent: 'my note', color: '#3415ae' }],
      archives: [],
      noteToEdit: {},
    };

    const archivedNote = globalReducer(initialState, {
      type: 'ADD_NOTE_TO_ARCHIVES',
      payload: { id: 1, textContent: 'my note', color: '#3415ae' },
    });
    expect(archivedNote.archives.length).toBe(1);
  });
  test('can update query correctly', () => {
    const initialState = {
      query: '',
      isAuthenticated: true,
      notes: [],
      archives: [],
      noteToEdit: {},
    };

    const changedQuery = globalReducer(initialState, {
      type: 'UPDATE_QUERY',
      payload: 'new-query',
    });
    expect(changedQuery.query).toBe('new-query');
  });
  test('can update note color correctly', () => {
    const initialState = {
      query: '',
      isAuthenticated: true,
      notes: [{ id: 1, textContent: 'my note', color: '#3415ae' }],
      archives: [],
      noteToEdit: { id: 1, textContent: 'my note', color: '#3415ae' },
    };

    const updatedColor = globalReducer(initialState, {
      type: 'UPDATE_NOTE_COLOR',
      payload: '#123456',
    });
    expect(updatedColor.noteToEdit.color).toBe('#123456');
  });
});
