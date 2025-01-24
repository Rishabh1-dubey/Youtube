import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
    
        setMessage:(state,action)=>{
            state.message.splice(40,1)
            state.message.push(action.payload)
        },

        clearChat:(state)=>{
            state.message=[]
                }
        

    }
})

export const{setMessage,clearChat} = chatSlice.actions;
export default chatSlice.reducer;