import {configureStore} from "@reduxjs/toolkit";
import isLoading from "./isLoading";
import Category from "./category";
import User from "./user";
import detail from "./detail";

export const store = configureStore({
  reducer: {
    loading: isLoading,
    category: Category,
    user: User,
    detail: detail
  }
})