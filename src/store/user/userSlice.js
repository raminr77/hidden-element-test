import { createSlice } from '@reduxjs/toolkit';
import { REDUCER_NAMES } from 'constants/reducerNames';

const initialState = {};

const userSlice = createSlice({
  name: REDUCER_NAMES.USER,
  initialState,
  reducers: {
    _: (state) => {}
  }
});

export const {} = userSlice.actions;

export default userSlice.reducer;
