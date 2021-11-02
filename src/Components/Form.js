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
        // this.setState({task: ""})        ----> truc de Marco je suis pas sur que ça serve à voir
    }

    render() {
        
        return (
            <form className="d-flex mt-3 mb-3" onSubmit= {this.handleSubmit}>
                <input 
                    className="form-control"
                    type="text" 
                    onChange={this.handleTaskDescriptionChange}
                />
                
                <button 
                    className="btn btn-warning text-white"
                    type="submit"
                    >Submit
                </button>
            </form>
        );
    }
}

export default Form;