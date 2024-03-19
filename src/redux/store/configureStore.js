import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import authReducer from '../reducer/authReducer';
import {setupListeners} from '@reduxjs/toolkit/query';
// import {combineReducers} from 'redux';
import {apiClient} from '../service/apiClient';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['rootReducer'],
  // Optionally, you can configure other options here
};

const rootReducer = combineReducers({
  auth: authReducer,

  // Add other reducers here if needed
});

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    [apiClient.reducerPath]: apiClient.reducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(apiClient.middleware),
  // other store configuration options
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

export {store, persistor};
