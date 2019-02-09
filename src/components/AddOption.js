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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" name="option" type="text" placeholder="Add your option"></input>
                    <button className="button">Add option</button>
                </form>
            </div>
        )
    }
}
