import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerNewUser } from './authOperations';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  userName: '',
  userEmail: '',
  token: null,
  userId: null,
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
        state.userId = action.payload.user.id;
      })
      .addCase(registerNewUser.rejected, rejectHandler)
      // ----- LogIn -----
      .addCase(loginUser.pending, pendingHandler)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userName = action.payload.user.username;
        state.userEmail = action.payload.user.email;
        state.token = action.payload.accessToken;
        state.userId = action.payload.user.id;
      })
      .addCase(loginUser.rejected, rejectHandler)
      // ----- Logout -----
      .addCase(logoutUser.pending, pendingHandler)
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userName = '';
        state.userEmail = '';
        state.token = null;
      })
      .addCase(logoutUser.rejected, rejectHandler);
    }
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