import React from 'react'
import ReactDOM from 'react-dom'

import IndecisionApp from './components/WrapperIndecisionApp.js'



const appRoot = document.getElementById('app')

//this.props will contain object of all the key values we tell at the time of creating instance component
//Key is a reserved word which is used te remove duplicacy while using map method etc to generate
//multiple same DOM elements etc
//Props are read only they can only be resend from the parent component only(one way)
//Whenever parent  state is changed render of parent is called again causing to call render of child components
//Lifecycle methods (only for class components)-
/* componentDidMount(){} -> When it actually renders
   componentDidUpdate(prevProps, prevState){}
   componentWillUnmount(){} -> When it's about to go away
   */



ReactDOM.render(<IndecisionApp /> , appRoot)

class OldSyntax {
    constructor() {
        this.name = 'Mike'
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting() {
        return `Hi ${this.name}`
    }
}
// const old = new OldSyntax() 
// const getGreeting = old.getGreeting//As we have binded 'this' in here so we wont get any error
// console.log(getGreeting())
// //---------------
// class NewSyntax {
//     name = 'Jen'//ES6 class transform props -> We used plugin to convert it into ES5 one
//     getGreeting = () => {
//         return  `Hi ${this.name}`
//     }
// }
// const news = new NewSyntax()
// const newGetGreeting = news.getGreeting//Arrow function has parent binding for this
// console.log(newGetGreeting())//Wont get any error