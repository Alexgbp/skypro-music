import { configureStore } from "@reduxjs/toolkit";
import currentReducer from "./CurrentTrackSlice";

export default configureStore({
    reducer: {
        tracks: currentReducer,
    },
})