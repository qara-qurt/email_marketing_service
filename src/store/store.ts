// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer, { initializeAuthState } from './authSlice.ts'; // Adjust the path as needed
import templateReduce from "./templateSlice.ts";
import booksReduce from "./bookSlice.ts";
import mailReduce from "./mailSlice.ts";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    template: templateReduce,
    books:booksReduce,
    mails:mailReduce
    // other reducers...
  },
});

// Initialize the auth state from localStorage
const storedAuthState = JSON.parse(localStorage.getItem('authState') || 'null');
store.dispatch(initializeAuthState(storedAuthState ? storedAuthState.isAuth : true));

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch