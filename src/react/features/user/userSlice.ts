import { createSlice , current } from "@reduxjs/toolkit";
import { Action } from "history";


type User = {
    id:number,
    name:string
}

type USER_INITIAL_STATE = {
    users: User[],
    test:String
}

const initialState : USER_INITIAL_STATE = {
    users : [],
    test:'hello'
}

export const getUsersThunk = async (dispatch:any) => {
       const users = await window.api.getUsers()
       await dispatch(getUsers(users));
}

export const userSlice = createSlice({
    name: 'user',
    initialState ,
    reducers:{
        getUsers:(state = initialState,action)=>{
           state.users = action.payload;
        },
        getUserById:(state,action)=>{
           
        },
        addUser:(state,action)=>{

        },
        deleteUserbyId:(state,action)=>{

        },
        modifyUser:(state,action)=>{

        }

    },extraReducers:{
        
    }
})


export const {getUserById,addUser,deleteUserbyId,modifyUser ,getUsers} = userSlice.actions
export default userSlice.reducer