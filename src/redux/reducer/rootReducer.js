// import {combineReducers} from 'redux';

import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authReducer';
import {apiClient} from '../service/apiClient';

const rootReducer = combineReducers({
  [apiClient.reducerPath]: apiClient.reducer,
  auth: authReducer,

  // Add other reducers here if needed
});

export default rootReducer;
