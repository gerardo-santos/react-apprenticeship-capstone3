import { render, screen, fireEvent } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import LogIn from '../pages/LogIn';

describe('LogIn', () => {
  test('renders the LogIn component', () => {
    const initialState = {};
    const { getByRole, getByPlaceholderText } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <LogIn />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const title = getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Log in');
    const emailInput = getByPlaceholderText('hello@test.com');
    expect(emailInput).toBeInTheDocument();
    const passwordInput = getByPlaceholderText('password123');
    expect(passwordInput).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: 'example@email.com' } });
    expect(emailInput.value).toBe('example@email.com');
    fireEvent.change(passwordInput, { target: { value: 'my-password' } });
    expect(passwordInput.value).toBe('my-password');
    const btn = getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn.textContent).toBe('Log in');
  });
  test('Incorrect credentials', async () => {
    const initialState = {};
    const { getByRole, getByPlaceholderText } = render(
      <GlobalContext.Provider value={initialState}>
        <BrowserRouter>
          <LogIn />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    const emailInput = getByPlaceholderText('hello@test.com');
    const passwordInput = getByPlaceholderText('password123');
    fireEvent.change(emailInput, { target: { value: 'incorrect@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrong-password' } });
    const btn = getByRole('button');
    fireEvent.click(btn);
    const errorAlert = await screen.findByRole('alert');
    expect(errorAlert).toBeInTheDocument();
    expect(errorAlert.textContent).toBe(
      'Firebase: Error (auth/user-not-found).'
    );
  });
});
