import { createSlice } from "@reduxjs/toolkit"

export const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: [],
    isLoading: false,
  },
  reducers: {
    getFetch: (state: any, action: any) => {
      state.formData = [...state.formData, ...action.payload]
      state.isLoading = true
    },
    getSucess: (state) => {
      state.isLoading = false
    },
    getFailure: (state) => {
      state.isLoading = false
    },
  },
})

export const { getFetch, getFailure, getSucess } = formSlice.actions
export default formSlice.reducer
