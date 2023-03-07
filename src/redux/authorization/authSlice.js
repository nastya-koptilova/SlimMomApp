import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  userName: '',
  userEmail: '',
  token: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState: initialState,
});

export const authReducer = authSlice.reducer;