import React from 'react';
import Form from './Components/Form';

class App extends React.Component {
  constructor (){
    super()

    // State initial
    this.state = {
      tasks: [],
      task: ""
    }
  }

  // Méthodes

  addTask(newTask){
    console.log(newTask)
  }

  handleTaskDescriptionChange(e){
    this.setState({task: e.target.value})
  }


  render() {
    return (
      <>
        <h1>To do list</h1>
        <Form 
          addTask= {this.addTask}
          onChange= {this.handleTaskDescriptionChange}
        />
      </>
    );
  }
}

export default App;
