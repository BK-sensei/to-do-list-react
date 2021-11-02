import React from 'react';
import Form from './Components/Form';

class App extends React.Component {
  constructor (){
    super()

    // State initial
    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this)
  }

  // Méthode
  addTask(str){
    let aaa = {description: str, status: "To do"}
    this.setState({tasks: [aaa, ...this.state.tasks ]})
  }


  render() {
    console.log(this.state.tasks)
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
