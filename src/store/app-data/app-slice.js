/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { REDUCER_NAMES } from 'constants/reducer-names';
import { DARK_MODE_STORAGE_KEY } from 'constants/local-storage-keys';

const initialState = {
  totalPrice: 0,
  headerTitle: '',
  darkMode: !!localStorage.getItem(DARK_MODE_STORAGE_KEY)
};

const appSlice = createSlice({
  name: REDUCER_NAMES.APP,
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    changeHeaderTitle: (state, action) => {
      state.headerTitle = action.payload;
    }
  }
});

export const { changeHeaderTitle, toggleDarkMode } = appSlice.actions;

export default appSlice.reducer;
