import React , {useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import {getUsersThunk} from '../features/user/userSlice'

function Dashboard (){

     const dispatch = (useDispatch())
     const users = useSelector((state:any)=>state.users)
     const onButtonClick = ()=>{
        console.log('clicked')
         getUsersThunk(dispatch);
     }

    let usersRenderer = users.map((e:any) => <div key={e.id} >{e.name}</div> )
        return (
            <div>
                <h1>Hello to Electron</h1>
                <button onClick={() => onButtonClick()}>GetUsers</button>
                <h1>Users</h1>
                <div>
                </div>
                <div>
                    {usersRenderer}
                </div>
            </div>
        )
}
export default Dashboard;