import { createSlice } from "@reduxjs/toolkit";

export const TracksSlice = createSlice({
    name: "TracksSlice",
    initialState: {
        track: [],
        currentTrack: null,
        isPlay: false,
        isMix: false,
    },
    reducers:{
        setTrack(state, action){
            state.track = action.payload
        },
        setCurrentTrack(state, action){
            state.currentTrack = action.payload
            state.isPlay = true
        },
        setPlaying(state){
            state.isPlay = !state.isPlay
        },
        setPrevTrack(state){
            const currentIndex = state.track.findIndex((element) =>  element.id === state.currentTrack.id)
            if(currentIndex === 0){
                return
            }
            state.currentTrack = state.track[currentIndex - 1]
        },
        setNextTrack(state){
            const currentIndex = state.track.findIndex((element) =>  element.id === state.currentTrack.id)
            if(currentIndex === state.track.length - 1){
                return
            }
            state.currentTrack = state.track[currentIndex + 1]
        },
        shuffleTrack(state){
            state.isMix = !state.isMix
            if(!state.isMix){
                return
            }
            const randomIndex = Math.floor((Math.random() * state.track.length));
            state.currentTrack = state.track[randomIndex];
        }
    }
})

export const {setTrack, setCurrentTrack, setPlaying, setPrevTrack, setNextTrack, shuffleTrack}  =  TracksSlice.actions;
export default TracksSlice.reducer;