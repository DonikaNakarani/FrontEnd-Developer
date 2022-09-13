import { createSlice } from '@reduxjs/toolkit'


const initialState ={
  users:[],
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
    addUser: (state,action)=>{
        
    }

  },
})

// Action creators are generated for each case reducer function
export const { Edit_cudtomer, Manage_customer } = userSlice.actions
export default userSlice.reducer