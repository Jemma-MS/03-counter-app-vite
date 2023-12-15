import React from 'react'
import ReactDOM from 'react-dom/client'
//import { HelloWorldApp } from './HelloWorldApp'
//import { Name } from './FirstApp'
import { CounterApp } from './CounterApp'

import './styles.css'

//const name = Name().props.children[0].props.children


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 26 }/>
    </React.StrictMode>
)

// if(name === 'true') {
//     ReactDOM.createRoot( document.getElementById('root') ).render(
//         <React.StrictMode>
//             <Name />
//         </React.StrictMode>
//     )
// } else {
//     ReactDOM.createRoot( document.getElementById('root') ).render(
//         <React.StrictMode>
//             <h1>Error en el procesamiento de la consulta</h1>
//         </React.StrictMode>
//     )
// }

//console.log(name)

