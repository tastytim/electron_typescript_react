import { Component } from "react";
import { Values} from "./../../utils/Types";
import { v4 as uuid } from 'uuid';
import React from "react";
const { ipcRenderer } = window.require("electron");


class AddToDoWindow extends Component {
  
  
  state: typeof Values = {
    value: "",
  };
  onChange  = (e: React.FormEvent<HTMLInputElement>):void => {
    this.setState({ value: e.currentTarget.value }) ;
  };
  onClick = () => {
    const uuidv4: string = uuid();
    
    if(this.state.value !== undefined && uuidv4 !== undefined){
      try{
         ipcRenderer.send("todo:add", { text: this.state.value , id : uuid() });
      }catch(error){
          console.log(error)
      }
      
    }
  };

  render(){
    return (<div>
           <h1>Add Todo</h1> 
           <input 
           type="text"
           autoFocus
           value={this.state.value}
           onChange={this.onChange}
           placeholder="Insert todo text"
           />
           <button
           onClick={this.onClick}>Add</button>
        </div>
    )
  }
}

export default AddToDoWindow;
