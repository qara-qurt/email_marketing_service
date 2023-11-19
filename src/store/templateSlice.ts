import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TemplateState {
  templates: any[];
}

const initialState:TemplateState = {
  templates:[]
}
export const templateSlice = createSlice({
  name: 'template',
  initialState:initialState,
  reducers: {
    saveTemplate: (state, action: PayloadAction<any>) => {
      state.templates.push(action.payload)
    }
  },
});

export const { saveTemplate } = templateSlice.actions;

export default templateSlice.reducer;
