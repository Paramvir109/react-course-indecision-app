import React from 'react'
import ReactDOM from 'react-dom'

import IndecisionApp from './components/WrapperIndecisionApp.js'
import 'normalize.css/normalize.css'//Resets the browser in-built styling(css reset)
import './styles/styles.scss'


const appRoot = document.getElementById('app')




ReactDOM.render(<IndecisionApp /> , appRoot)
// const Parent = (props) => {
//     return (
//         <div>
//             <h1>Hello</h1>
//             <div>{props.children}</div>
//         </div>
        

//     )
// }

// ReactDOM.render(
//     <Parent>
//         <h1>This will go into props.children</h1>
//     </Parent> , appRoot)


