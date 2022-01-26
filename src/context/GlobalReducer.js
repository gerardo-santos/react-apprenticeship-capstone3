export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, isAuthenticated: true };
    case 'SIGN_OUT':
      return { ...state, isAuthenticated: false };
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
