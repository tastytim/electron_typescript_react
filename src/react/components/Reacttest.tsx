import { ipcRenderer } from "electron";
import React , {useState, useEffect} from "react";



function Reacttest(){
    const [users , setUsers] = useState([]);
    useEffect(()=>{
        console.log('useeffect')

        ipcRenderer.send('users:list');
        console.log(ipcRenderer.send('users:list'))
        // ipcRenderer.on('users:list', (event, data)=>{
        //     console.log(data)
        //     setUsers(data);
        // })
    })

    const usersRender = () =>{
        users.map((e)=>{
            return <div>{e.name}</div>
        })
    }

    return (
        <div>
            <h1>React Test</h1>
            <div></div>
        </div>
    )

}


export default Reacttest;