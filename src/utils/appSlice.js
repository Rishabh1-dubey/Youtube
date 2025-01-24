import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

export const appSlice = createSlice({
  name: 'appy',
  initialState:{
  open:true,
  video:[],
  category:"All",
  searchSuggestion:[],
  searchVideo:[]
  },
  reducers: {
  toggleSidebar:(state)=>{
    state.open = !state.open
  },
  setHome:(state,action)=>{
    state.video = action.payload
  },
  setCategory:(state,action)=>{
    state.category= action.payload
  } ,
  setSeachSuggestion:(state,action)=>{
    state.searchSuggestion= action.payload
  },
  SetsearchVideo:(state,action)=>{
    state.searchVideo= action.payload
  }
}
  })
// Action creators are generated for each case reducer function
export const { toggleSidebar,setHome,setCategory,setSeachSuggestion,SetsearchVideo } = appSlice.actions

export default appSlice.reducer