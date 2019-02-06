import React from 'react'

import AddOption from './AddOption.js'
import Options from './Options.js'
import Action from './Action.js'
import Header from './Header.js'


export default class IndecisionApp extends React.Component {
    // constructor(props) {//It gets called with props object 
    //                     //Constructor always has the right binding for this

    //     super(props)//If we dont call this we wont get access to this.props
    //     this.state = {
    //         options : []//Default value set which is empty array
    //     }
    //     //We bind the method one time so preventing to bind everytime in render function

    //     this.handleRemoveAll = this.handleRemoveAll.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)


    // }
    state = {
        options : []
    }
    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'))
            if(options) {
                this.setState(() => ({options}))
            }
            
        } catch (e) {
            //DO nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.options.length !== prevState.options.length) {//Only update when actual data changing
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }

    }
    handleRemoveAll =() => {//will get called in the same context as the render function(bind is used)
                        //Otherwise this.props wont work here
                        //This will be called in Options component but this.setState wont change options props
                        //there so sending it as a prop in Options
        this.setState(() => ({options : []}))//shorthand arrow -> returns an object
            
             
    }
    handlePick = () => {
        const option = Math.floor(Math.random()*this.state.options.length)
        alert(this.state.options[option])
    }
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter a valid option'
        }
        if(this.state.options.indexOf(option) > -1) {
            return 'Option already exists'
        }
        this.setState((prevState) => ({options : prevState.options.concat(option)}))
            // prevState.options.push(option) Dont use this as you are directly manipulating the state 
            //Use concat method as it doesnt manipulate the two arrays but result the new array
            //Concat merges 2 arrays
            //But if single element. Pass it directly
            
        
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }
    render() {
        const subtitle = 'Put your life in the hands of your computer'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick} />
                <Options 
                    options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll} 
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}