import { authReducer } from './authorization/authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { combineReducers } from '@reduxjs/toolkit';
import { caloriesReducer } from './dailyCalories/caloriesSlice';

const persistConfig = {
  key: 'token',
  storage,
  blacklist: ['isLoading', 'error', 'isLoggedIn', 'userName', 'userEmail'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
    userData: persistedReducer,
    dailyCalories: caloriesReducer
  });