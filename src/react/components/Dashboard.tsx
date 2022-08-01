import React , {useEffect, useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import {getUsersThunk} from '../features/user/userSlice'

function Dashboard (){


     const dispatch = (useDispatch())

     let users:any = useSelector((state:any) =>state.user.users);
     let [currUsers, setCurrUsers] = useState(users);
     let test = useSelector((state:any)=>state.test);




     
     useEffect(()=>{
        console.log('only run once')  
        getUsersThunk(dispatch);
        
     },[]) 

     useEffect(()=>{ 
        getUsersThunk(dispatch);
        console.log('loop')
     },[currUsers])
     




    let usersRenderer = users.map((e:User)=>(<div key={e.id}>{e.name}</div>))
        return (
            <div>
                <h1>Hello to Electron</h1>
                {/* <h1>{usersss}</h1>
                <h1>{Object.keys(users).length ?  Object.entries(users).length : 'not users'}</h1> */}
              
                <div>{usersRenderer}</div>
               <div>{test}</div>
               
            </div>
        )
}
export default Dashboard;