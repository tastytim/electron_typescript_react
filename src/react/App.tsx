
import React from 'react';
import AddToDoWindow from './components/AddToDoWindow';
import MainWindow from './components/MainWindow';


function App(){
    const search = global.location.search;
    const params = new URLSearchParams(search);
    const window = params.get('window');
    if(window === "new_todo") return  <AddToDoWindow/>
    return <MainWindow/>
}


export default App;