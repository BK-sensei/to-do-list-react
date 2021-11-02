import React from 'react';
import Form from './Components/Form';

class App extends React.Component {
  constructor (){
    super()

    // State initial
    this.state = {
      tasks: []
    }
  }

  // Méthode
  addTask(string){
    console.log(string)
  }

  render() {
    return (
      <>
        <h1>To do list</h1>
        <Form 
          addTask= {this.addTask}
        />
      </>
    );
  }
}

export default App;
