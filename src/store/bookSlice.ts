// authSlice.js

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type IBook = {
  name:string,
  emails:string[]
}

interface BooksState {
  books: IBook[];
}

const initialState:BooksState = {
  books:[]
}
export const bookSlice = createSlice({
  name: 'book',
  initialState: initialState,
  reducers: {
    saveBook: (state, action: PayloadAction<any>) => {
      state.books.push(action.payload)
    }
  },
});

export const { saveBook } = bookSlice.actions;

export default bookSlice.reducer;
