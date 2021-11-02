import React from 'react';
import Form from './Components/Form';

class App extends React.Component {
  constructor (){
    super()

    // State initial
    this.state = {
      tasks: ""
    }
  }

  // Méthodes

  addTask(newTask){
    console.log(newTask)
  }


  render() {
    return (
      <>
        <h1>To do list</h1>
        <Form 
          addTask={this.addTask}
        />
      </>
    );
  }
}

export default App;
