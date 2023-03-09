import { createSlice } from '@reduxjs/toolkit';
import {
  addProductOper,
  deleteProductOper,
  getInfoOper,
  productSearchOper,
} from './diaryOperation';
// import moment from 'moment';
// Slice для пошуку продуктів
export const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState: {
      productsData: [],
      status: 'idle',
      error: null,
      dayData: null,
      // date: moment(new Date()).format("YYYY-MM-DD"),
      // eatenProducts : null,

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
        console.log(action.payload)
        // state.eatenProducts = action.payload.day.eatenProducts;
      })
      .addCase(addProductOper.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
        
      })
      .addCase(deleteProductOper.pending, state => {
        state.status = 'pending';
      })
      .addCase(deleteProductOper.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.dayData = action.payload;
        // state.eatenProducts = state.eatenProducts.filter(
        //   product => product.id !== action.payload
        // )
      }).addCase(deleteProductOper.rejected, (state, action) => {
        state.status = 'pending';
        state.error = action.payload;
        console.log(action.payload);
      })
      .addCase(getInfoOper.pending, state => {
        state.status = 'pending';
      })
      .addCase(getInfoOper.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.dayData = action.payload;
        // state.eatenProducts = state.eatenProducts.filter(
        //   product => product.id !== action.payload
        // )
      }).addCase(getInfoOper.rejected, (state, action) => {
        state.status = 'pending';
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
