import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error : undefined
    }
    handleAddOption = (e) => {//Making it arrow fn
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
