import { ipcRenderer } from "electron";
import React from "react";
import {Component} from 'react'



class MainWindow extends Component{ 
    state ={
        msgFromMainProcess :''
    };

    componentDidMount(){
        ipcRenderer.on('event',(event, data)=>{
            this.setState({msgFromMainProcess :data.msg})
        })
    }

    onButtonclick(){
        ipcRenderer.send('categories:get', {})
    }

    render(){
        return (
            <div>
                <h1>Hello to Electron</h1>
                <p>Comunicate with Main Process</p>
            </div>
        )
    }


}


export default MainWindow;