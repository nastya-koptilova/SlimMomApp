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
      productsData: [],
      status: 'idle',
      error: null,
      dayData: null,
      // productId: null,
    },

  extraReducers: builder =>
    builder
      .addCase(productSearchOper.pending, state => {
        state.status = 'pending';
      })
      .addCase(productSearchOper.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.productsData = action.payload;
        // state.productId = action.payload._id;
      })
      .addCase(productSearchOper.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(addProductOper.pending, state => {
        state.status = 'pending';
      })
      .addCase(addProductOper.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.dayData = action.payload;
      })
      .addCase(addProductOper.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
  // reducers: {
  //   filterProduct(state, action) {
  //     state.filter = action.payload;
  //   },
  // },
});

export const productSearchReducer = productSearchSlice.reducer;
// export const { filterProduct } = productSearchSlice.actions;
