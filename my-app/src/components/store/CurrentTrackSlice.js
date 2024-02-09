import { createSlice } from "@reduxjs/toolkit";

export const currenTrackSlice = createSlice({
    name: "currenTrackSlice",
    initialState: {
        track: ""
    },
    reducers:{
        setTrack(state, action){
            state.track = action.payload
        }
    }
})

export default currenTrackSlice.reducer;