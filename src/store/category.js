import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {BASE_URL} from "../helper/api";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async function () {
    try {
      const res = await fetch(
        `${BASE_URL}products/category/`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-CSRFToken":
              "pLGX14J79GyOIHTFGMr1XE3iHyDDK9vlYqjZjSB3aRIzrqUE9iRxwLTGPzByUfPB",
          },
        }
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

const Category = createSlice({
  name: "Category",
  initialState: {
    loading: false,
    items: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export default Category.reducer;
