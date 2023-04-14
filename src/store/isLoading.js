import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loading: false
}

const isLoading = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true
    },
    stopLoading(state) {
      state.loading = false
    },
    customLoading(state, action) {
      action.payload ? state.loading = true : state.loading = false
    }
  }
})

export const {startLoading, stopLoading, customLoading} = isLoading.actions
export default isLoading.reducer