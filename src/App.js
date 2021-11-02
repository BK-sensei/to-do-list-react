import React from 'react';
import Form from './Components/Form';
import List from './Components/List';

class App extends React.Component {
  constructor (){
    super()

    // State initial
    this.state = {
      tasks: []
    }
    
    // Bindind de la méthode
    this.addTask = this.addTask.bind(this)
  }

  // Méthode
  addTask(str){
    let newTask = {description: str, status: "To do"}          // la description est le paramètre de la fonction 'addTask'
    this.setState({tasks: [newTask, ...this.state.tasks]})    // ajout au tableau 'state tasks' un objet task + l'élément ajouté est mis au début du tableau
  }


  render() {
    return (
      <>
        <h1>To do list</h1>
        <Form 
          addTask= {this.addTask}
        />

        <List 
          tasks= {this.state.tasks}
        />
      </>
    );
  }
}

export default App;
