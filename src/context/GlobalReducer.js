export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, isAuthenticated: true };
    case 'SIGN_OUT':
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
