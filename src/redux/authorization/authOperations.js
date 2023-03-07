import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi } from "services/api";

export const registerNewUser = createAsyncThunk(
    '/auth/register',
    async (credential, thunkAPI) => {
      try {
        const result = await AuthApi.registerNewUser(credential);
        console.log(result)
        return result;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );