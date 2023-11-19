// authSlice.js

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBook } from "./bookSlice.ts";

export type IMail = {
  name:string,
  mail:IBook,
  template:any
}

interface MailsState {
  mails: IMail[];
}

const initialState:MailsState = {
  mails:[]
}
export const mailSlice = createSlice({
  name: 'mail',
  initialState: initialState,
  reducers: {
    saveMail: (state, action: PayloadAction<any>) => {
      state.mails.push(action.payload)
    }
  },
});

export const { saveMail } = mailSlice.actions;

export default mailSlice.reducer;
