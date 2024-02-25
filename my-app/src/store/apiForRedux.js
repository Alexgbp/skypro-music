import { createAsyncThunk } from '@reduxjs/toolkit';

export const AddLike = createAsyncThunk(
  'track/addLike',
  async function ({id, token}) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer${token}`,
        },
      }
    );
    await response.json();
  }
);
