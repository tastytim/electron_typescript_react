import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


type User = {
    id:number,
    name:string
}

type USER_INITIAL_STATE = {
    users: User[]
}

const initialState : USER_INITIAL_STATE = {
    users : []
}

export const getUsersThunk = async (dispatch:any) => {
    console.log('DISPATCH')
       const users = await window.api.getUsers()
       await dispatch(getUsers(users));
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        getUsers:(state,action)=>{
            state.users = action.payload
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