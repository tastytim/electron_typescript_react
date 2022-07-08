
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Anagrafica from './Anagrafica'
import Dashboard from './Dashboard'
import Impostazioni from './Impostazioni'

export default function MainWindow() {

    const routes = [
        {
            path:'*',
            element: Dashboard
        },
        {
            path:'anagrafica',
            element: Anagrafica
        },
        {
            path:'impostazioni',
            element:Impostazioni
        }
    ]
    return (
        <Routes>
            {routes.map((e, i)=>(
                <Route key={i} path={e.path} element={<e.element/>}></Route> 
            ))}
            <Route path='/' element={<Anagrafica/>}></Route>
        </Routes>
    )
}
