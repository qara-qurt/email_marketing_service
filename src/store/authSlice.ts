// authSlice.js

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loadAuthStateFromLocalStorage = () => {
  const storedState = localStorage.getItem('authState');
  return storedState ? JSON.parse(storedState) : { isAuth: false }; // Default to true if not found
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: loadAuthStateFromLocalStorage(),
  reducers: {
    signIn: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
      localStorage.setItem('authState', JSON.stringify(state));
    },
    initializeAuthState: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    logOut:(state)=>{
      state.isAuth = false
      localStorage.removeItem('authState')
    }
  },
});

export const { signIn, initializeAuthState, logOut } = authSlice.actions;

export default authSlice.reducer;
