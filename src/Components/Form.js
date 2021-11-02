import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super()

        // State initial
        this.state = {
            task: ""
        }
        
        // Binding
        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Méthodes
    handleTaskDescriptionChange(e){
        this.setState({task: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.addTask(this.state.task)
    }

    render() {
        return (
            <form
                onSubmit= {this.handleSubmit}
            >
                <input 
                    type="text" 
                    onChange={this.handleTaskDescriptionChange}
                />
                
                <button 
                    type="submit"
                    >Submit
                </button>
            </form>
        );
    }
}

export default Form;