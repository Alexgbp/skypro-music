import { createAsyncThunk } from "@reduxjs/toolkit";
// import { tokenUser } from "../../api/api";
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTcxMjcxLCJpYXQiOjE2OTA5NjAxMzEsImp0aSI6ImE4YzQ5NDNmOWNmNTRlZjI5NmFmNTMyOWUwODM4YWQ5IiwidXNlcl9pZCI6NzkyfQ.5n8YHTjsgAnYnc4gioyV1wPnxM2D16PS6c9kNhC-JoE";

export  const AddLike = createAsyncThunk(
    "track/like",
     async function(id, {rejectWithValue}){
       try {
        const response =  await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
            method: "POST",
            headers: { 
                Authorization: `Bearer ${accessToken}`  
            },
        })
        if(!response.ok){
            throw new Error("Ошибка")
        }
        // dispatch(tokenUser(email, passowrd))
        const data = response.json()
        return data;
       } catch (error) {
        return rejectWithValue(error.message)
       }
     }
)