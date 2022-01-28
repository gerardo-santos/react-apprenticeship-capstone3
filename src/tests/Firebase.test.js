import { logInFirebase, signOutFirebase } from '../firebase/base';

describe('firebase auth functions', () => {
  test('returns auth functions', () => {
    const logInresponse = logInFirebase();
    expect(typeof logInresponse).toBe('object');
    const signOutResponse = signOutFirebase();
    expect(typeof signOutResponse).toBe('object');
  });
});
