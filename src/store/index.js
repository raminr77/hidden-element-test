import { configureStore } from '@reduxjs/toolkit';
import { REDUCER_NAMES } from 'constants/reducerNames';

import appReducer from 'store/app-data/app-slice';

const store = configureStore({
  reducer: {
    [REDUCER_NAMES.APP]: appReducer
  }
});

export { store };
