import { createSlice } from '@reduxjs/toolkit';
import { registerNewUser } from './authOperations';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  userName: '',
  userEmail: '',
  userId: '',
  token: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: builder => {
    builder
      // ----- SignUp -----
      .addCase(registerNewUser.pending, pendingHandler)
      .addCase(registerNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userName = action.payload.username;
        state.userEmail = action.payload.email;
        state.userId = action.payload.id;
      })
      .addCase(registerNewUser.rejected, rejectHandler)}
});

function pendingHandler(state) {
    state.error = null;
    state.isLoading = true;
  }
  function rejectHandler(state, action) {
    state.isLoading = false;
    state.error = action.payload;
  }

export const authReducer = authSlice.reducer;