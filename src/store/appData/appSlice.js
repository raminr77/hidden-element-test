import { createSlice } from '@reduxjs/toolkit';
import { REDUCER_NAMES } from 'constants/reducerNames';

const initialState = {
  darkMode: true,
};

const appSlice = createSlice({
  name: REDUCER_NAMES.APP,
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    }
  }
});

export const { toggleDarkMode } = appSlice.actions;

export default appSlice.reducer;
