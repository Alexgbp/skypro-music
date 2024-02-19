import { createSlice } from "@reduxjs/toolkit";
import { AddLike } from "./asynkReducers";

export const TracksSlice = createSlice({
  name: 'TracksSlice',
  initialState: {
    track: [],
    currentTrack: null,
    isPlay: false,
    isMix: false,
    status: null,
    error: null,
  },
  reducers: {
    setTrack(state, action) {
      state.track = action.payload;
    },
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload;
      state.isPlay = true;
    },
    setPlaying(state) {
      state.isPlay = !state.isPlay;
    },
    setPrevTrack(state) {
      state.isPlay = true
      if (state.isMix) {
        const randomIndex = Math.floor(Math.random() * state.track.length);
        state.currentTrack = state.track[randomIndex];
        return;
      }
      const currentIndex = state.track.findIndex(
        (element) => element.id === state.currentTrack.id
      );
      if (currentIndex === 0) {
        return;
      }
      state.currentTrack = state.track[currentIndex - 1];
    },
    setNextTrack(state) {
      state.isPlay = true
      if (state.isMix) {
        const randomIndex = Math.floor(Math.random() * state.track.length);
        state.currentTrack = state.track[randomIndex];
        return;
      }
      const currentIndex = state.track.findIndex(
        (element) => element.id === state.currentTrack.id);
      if (currentIndex === state.track.length - 1) {
        return;
      }
      state.currentTrack = state.track[currentIndex + 1];
    },
    shuffleTrack(state) {
      state.isMix = !state.isMix;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AddLike.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {setTrack, setCurrentTrack, setPlaying, setPrevTrack, setNextTrack, shuffleTrack}  =  TracksSlice.actions;
export default TracksSlice.reducer;