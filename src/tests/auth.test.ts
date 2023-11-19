import { configureStore } from '@reduxjs/toolkit';
import authReducer, { signIn, initializeAuthState, logOut } from '../store/authSlice';

// Define the type of your state
interface State {
  auth: {
    isAuth: boolean;
  };
}

describe('auth reducer', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({ reducer: { auth: authReducer } });
    localStorage.clear();
  });

  it('should handle initial state', () => {
    const { auth } = (store.getState() as State);
    expect(auth.isAuth).toBe(false);
  });

  it('should handle signIn', () => {
    // Dispatch the signIn action
    store.dispatch(signIn(true));
    const { auth } = (store.getState() as State);
    expect(auth.isAuth).toBe(true);
  });


  it('should handle initializeAuthState', () => {
    store.dispatch(initializeAuthState(true));
    const { auth } = (store.getState() as State);
    expect(auth.isAuth).toBe(true);
  });

  it('should handle logOut', () => {
    store.dispatch(logOut());
    const { auth } = (store.getState() as State);
    expect(auth.isAuth).toBe(false);
    expect(localStorage.getItem('authState')).toBeUndefined();
  });
});
