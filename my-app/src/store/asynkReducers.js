import { createAsyncThunk } from "@reduxjs/toolkit";

export const AddLike = createAsyncThunk(
  "track/addLike",
  async function(id){
      const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`)
      const data = response.json()
      return data
  }
)