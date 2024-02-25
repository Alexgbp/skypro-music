// extraReducers: (builder) => {
//   builder.addCase(AddLike.rejected, (state, action) => {
//     state.error = action.payload;
//   });
// },

import { createSlice } from "@reduxjs/toolkit";

export const asyncSlice = createSlice({
  name: "track/Like",
  initialState: {
    favoriteTracks: []
  },
  reducers: {

  }
})
