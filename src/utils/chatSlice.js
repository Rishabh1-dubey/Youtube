import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
        setMessage:(state,action)=>{
            state.message.push(action.payload)
        }
    }
})

export const{setMessage} = chatSlice.actions;
export default chatSlice.reducer;