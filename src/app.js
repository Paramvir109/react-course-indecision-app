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
class IndecisionApp extends React.Component {
    constructor(props) {//It gets called with props object 
                        //Constructor always has the right binding for this

        super(props)//If we dont call this we wont get access to this.props
        this.state = {
            options : []//Default value set which is empty array
        }
        //We bind the method one time so preventing to bind everytime in render function

        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)


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
    handleRemoveAll() {//will get called in the same context as the render function(bind is used)
                        //Otherwise this.props wont work here
                        //This will be called in Options component but this.setState wont change options props
                        //there so sending it as a prop in Options
        this.setState(() => ({options : []}))//shorthand arrow -> returns an object
            
             
    }
    handlePick () {
        const option = Math.floor(Math.random()*this.state.options.length)
        alert(this.state.options[option])
    }
    handleAddOption(option) {
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
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }
    render() {
        const subtitle = 'Put your life in hands of your computer'
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
// IndecisionApp.defaultProps = { Removing this as we are reading from local storage so any prop sent would be overwritten
//     options : []
// }
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title : 'Indecision'//Default value when no prop is passed for title
}
const Action = (props) => {
    return(
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    )
}
const Options = (props) => {
    return (
        <div>
                <button onClick={props.handleRemoveAll}>Remove All</button>
                {props.options.length === 0 && <p>Please add an option to get started</p>}
                {props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />)
                )}
        </div>
    )
}
const Option = (props) =>{
    return (
        <li>{props.optionText} 
            <button 
                onClick={(e) => {//Making an inline function
                    props.handleDeleteOption(props.optionText)
                }}
            >
            Remove</button>
        </li>)
 } 
class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error:undefined//undefined is false
        }
    }
    handleAddOption(e) {//Not removing this fn as we still need this
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        e.target.elements.option.value = ''
        const error = this.props.handleAddOption(option)//sending data back to parent component
        this.setState(() => {
            return {error}
        })
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text" placeholder="Add your option"></input>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}


//<Header /> That's how we write component in jsx


//Stateless functional component(no state, only props and jsx)(faster than Class)
// const User = (props) => {
//     return (
//         <div>
//             <p>Name : {props.name}</p>
//             <p>Age : {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp /> , appRoot)