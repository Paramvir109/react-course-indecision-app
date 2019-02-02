const appRoot = document.getElementById('app')

//this.props will contain object of all the key values we tell at the time of creating instance component
//Key is a reserved word which is used te remove duplicacy while using map method etc to generate
//multiple same DOM elements etc
//Props are read only they can only be resend from the parent component only(one way)
//Whenever parent  state is changed render of parent is called again causing to call render of child components
class IndecisionApp extends React.Component {
    constructor(props) {//It gets called with props object 
                        //Constructor always has the right binding for this

        super(props)//If we dont call this we wont get access to this.props
        this.state = {
            options : []
        }
        ////We bind the method one time so preventing to bind everytime in render function

        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)


    }
    handleRemoveAll() {//will get called in the same context as the render function(bind is used)
                        //Otherwise this.props wont work here
                        //This will be called in Options component but this.setState wont change options props
                        //there so sending it as a prop in Options
        this.setState(() => {
            return{
                options:[]
            }
        })
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
        this.setState((prevState) => {
            // prevState.options.push(option) Dont use this as you are directly manipulating the state 
            //Use concat method as it doesnt manipulate the two arrays but result the new array
            return {
                options : prevState.options.concat(option)//Concat merges 2 arrays
                                            //But if single element. Pass it directly
            }
        })
    }
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your life in hands of your computer'
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick} />
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}
class Header extends React.Component {//Here use capital first letter for class name otherwise wont render
    render() {//This method must be defined
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
class Action extends React.Component {
    // handlePick() {
    //     console.log(this.props)
    // }
    render() {

        
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        )
    }
}
class Options extends React.Component {
   
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
                {this.props.options.map((option => <Option key={option} optionText={option} />))}
            </div>
        )
    }
}
class Option extends React.Component {
    render() {
        return <li>{this.props.optionText}</li>
    }
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
                <form onSubmit={this.handleAddOption.bind(this)}>
                    <input name="option" type="text" placeholder="Add your option"></input>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}


//<Header /> That's how we write component in jsx



ReactDOM.render(<IndecisionApp /> , appRoot)