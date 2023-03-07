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
    products: {
      productsData: [],
      status: 'idle',
      error: null,
    },
    filter: '',
  },
  extraReducers: builder =>
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
      }),
  reducers: {
    filterProduct(state, action) {
      state.filter = action.payload;
    },
  },
});

export const productSearchReducer = productSearchSlice.reducer;
export const { filterProduct } = productSearchSlice.actions;
