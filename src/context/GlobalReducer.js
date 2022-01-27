export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, isAuthenticated: true };
    case 'SIGN_OUT':
      return { ...state, isAuthenticated: false };
    case 'CREATE_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    case 'ADD_NOTE_TO_ARCHIVES':
      return { ...state, archives: [...state.archives, action.payload] };
    case 'REMOVE_ARCHIVED_NOTE_FROM_NOTES':
      return { ...state, notes: [...action.payload] };
    case 'PERMANENTLY_DELETE_ARCHIVED_NOTE':
      return { ...state, archives: [...action.payload] };
    case 'UPDATE_QUERY':
      return { ...state, query: action.payload };
    case 'SELECT_NOTE_TO_EDIT':
      return { ...state, noteToEdit: action.payload };
    case 'UPDATE_NOTE_TEXT':
      return {
        ...state,
        noteToEdit: { ...state.noteToEdit, noteText: action.payload },
      };
    case 'UPDATE_NOTE_COLOR':
      return {
        ...state,
        noteToEdit: { ...state.noteToEdit, color: action.payload },
      };
    case 'SAVE_EDITED_NOTE':
      return { ...state, notes: [...action.payload] };
    default:
      return state;
  }
};
