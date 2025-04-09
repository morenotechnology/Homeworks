import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import stackReducer from './slices/stackSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    stack: stackReducer,
  },
});

export default store;
