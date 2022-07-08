import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name:'users',
    initialState:{
        users:[]
    },
    reducers:{
        getUsers:(state, action)=>{
            state.users = action.payload 
        },
        addUser:(state, action)=>{
           state.users.push(action.payload)
        },
        deleteUser:(state,action)=>{
            state.users.slice(action.payload)
        }
    }
})


export const {getUsers,addUser,deleteUser} = usersSlice.actions

export default usersSlice.reducer