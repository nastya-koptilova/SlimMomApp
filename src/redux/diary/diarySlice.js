import { createSlice } from '@reduxjs/toolkit';
import {
  addProductOper,
  deleteProductOper,
  productSearchOper,
} from './diaryOperation';

// Slice для пошуку продуктів
export const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(productSearchOper.pending, state => {
        state.status = 'loading';
      })
      .addCase(productSearchOper.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(productSearchOper.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
