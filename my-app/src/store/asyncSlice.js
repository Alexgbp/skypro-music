import { createSlice } from "@reduxjs/toolkit";
import { AddLike, DeleteLike } from "./apiForRedux";

export const asyncSlice = createSlice({
  name: "track/Like",
  initialState: {
    favoriteTracks: []
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(AddLike.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addCase(DeleteLike.rejected, (state, action) => {
      state.error = action.payload;
    })
  },
})
