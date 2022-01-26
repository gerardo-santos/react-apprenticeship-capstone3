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
    default:
      return state;
  }
};
