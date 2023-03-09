import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addProduct,
  deleteProduct,
  getDayInfo,
  productSearch,
  UserApi,
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
      // const result = await addProduct(productInfo);
      // console.log(result);
      // return result;
      const {day, daySummary, newDay, newSummary, eatenProduct} = await addProduct(productInfo);
      // getInfoOper();
      //  console.log(day, daySummary, newDay, newSummary, eatenProduct)
      //  console.log(daySummary, newDay, newSummary, eatenProduct)
      //  console.log(newDay, newSummary, eatenProduct)
      //  console.log(newSummary, eatenProduct)
      //  console.log(eatenProduct)
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
      console.log(result.eatenProducts);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  'auth/getinfo',
  async (_, thunkAPI) => {
    try {
      const result = await UserApi.getUserInfo();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
