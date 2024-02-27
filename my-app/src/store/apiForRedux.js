import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLike } from './CurrentTrackSlice';

export const AddLike = createAsyncThunk(
  'track/addLike',
  async function ({id, token, dispatch}) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    await response.json();
    dispatch(setLike())
  }
);
