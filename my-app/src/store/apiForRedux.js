import { createAsyncThunk } from "@reduxjs/toolkit";
import { tokenUser } from "../api/api";

export const AddLike = createAsyncThunk(
  "track/addLike",
  async function(id,{dispatch}){
      const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer`
        },
      })
      await response.json()
      dispatch(tokenUser())
  }
)