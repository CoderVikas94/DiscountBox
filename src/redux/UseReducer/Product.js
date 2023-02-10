import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Action  1
export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  async (pageSkip = 0) => {
    const response = await axios.get(
      `https://dummyjson.com/products?skip=${pageSkip}&limit=5`
    );
    return response.data;
  }
);

// Action 2
export const searchProduct = createAsyncThunk("searchProduct", async (val) => {
  const response = await axios.get(
    `https://dummyjson.com/products/search?q=${val}`
  );
  return response.data;
});

// Action 3

export const searchItem = createAsyncThunk("searchProduct", async (val) => {
  const response = await axios.get(`https://dummyjson.com/products/${val}`);
  return response.data;
});

// Action 3

export const categoryItem = createAsyncThunk("searchProduct", async (val) => {
    const response = await axios.get(`https://dummyjson.com/products/category/${val}`);
    return response.data;
  });

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchProduct.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },},
  {
    name: "item",
  initialState: {
    isLoading: false,
    item: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(searchItem.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(searchItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
    });

    builder.addCase(fetchProduct.searchItem, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
  
  },
  {
    name: "category",
    initialState: {
      isLoading: false,
      category: null,
      isError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(categoryItem.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(categoryItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      });
  
      builder.addCase(categoryItem.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
    },},);

    console.log("action.payload",categoryItem.fulfilled);


export default productSlice.reducer;

