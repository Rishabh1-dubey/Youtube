import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'appy',
  initialState:{
  open:true
  },
  reducers: {
  toggleSidebar:(state)=>{
    state.open = !state.open
  }
}
  })
// Action creators are generated for each case reducer function
export const { toggleSidebar } = appSlice.actions

export default appSlice.reducer