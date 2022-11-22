import { configureStore } from '@reduxjs/toolkit';
import { REDUCER_NAMES } from 'constants/reducerNames';

import userReducer from 'store/user/userSlice';

export const store = configureStore({
  reducer: {
    [REDUCER_NAMES.USER]: userReducer
  }
});