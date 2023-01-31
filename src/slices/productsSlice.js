import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import { url, setHeaders } from "./api";
//import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
 // createStatus: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
  async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");

      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
      
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productsSlice.reducer;