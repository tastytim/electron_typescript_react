import { ipcRenderer } from "electron";
import React from "react";

class MainWindow extends React.Component<{}, UsersArray>{ 
    constructor(props:any){
        super(props);
        this.state = {
           users : []
        }
    }
    
    async componentDidMount(){
        ipcRenderer.send('users:list',{});
        ipcRenderer.on('users:list', (event,data)=>{
            console.log(data)
            this.setState( {users :  data});
        })
    }

    onButtonclick(){
        console.log('SENT')
        ipcRenderer.send('users:list',{});
    
    }
  

    usersRenderer = () =>{
        return this.state.users.map(user=><div key={user.id} >{user.name}</div>)
        }
    
    render(){
        
        return (
            <div>
                <h1>Hello to Electron</h1>

               <button onClick={()=>this.onButtonclick()}>GetUsers</button>
               <h1>Users</h1>
               <div>
                
                {this.usersRenderer()}
               </div>
            </div>
        )
    }
}


export default MainWindow;