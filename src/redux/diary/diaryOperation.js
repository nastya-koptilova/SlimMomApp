import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addProduct,
  deleteProduct,
  getDayInfo,
  productSearch,
} from 'services/api';

// Search and get a list of products by query
export const productSearchOper = createAsyncThunk(
  'products/productSearch',
  async (search, thunkAPI) => {
    try {
      const result = await productSearch(search);
 
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Post an eaten product
export const addProductOper = createAsyncThunk(
  'product/addProduct',
  async (productInfo, thunkAPI) => {
    try {
      const {day, daySummary, newDay, newSummary, eatenProduct} = await addProduct(productInfo);
      
      return {day:day || newDay,
         daySummary:daySummary || newSummary,
          eatenProduct: eatenProduct};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteProductOper = createAsyncThunk(
  'product/deleteProduct',
  async (productId, thunkAPI) => {
    try {
      const result = await deleteProduct(productId);
      console.log(result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getInfoOper = createAsyncThunk(
  'products/getDayInfo',
  async (dateInfo, thunkAPI) => {
    try {
      const result = await getDayInfo(dateInfo);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
