import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import List from './Components/List';

class App extends React.Component {
  constructor (){
    super()

    // State initial
    this.state = {
      tasks: []
    }
    
    // Bindind des méthodes
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  //---- Méthodes

  // Fontion ajout d'une tâche
  addTask(str){
    let newTask = {description: str, status: "To do"}          // la description est le paramètre de la fonction 'addTask'
    this.setState({tasks: [newTask, ...this.state.tasks]})    // ajout au tableau 'state tasks' un objet task + l'élément ajouté est mis au début du tableau
  }

  // Fontion suppression d'une tâche
  deleteTask(e){
    console.log(e.target.id);
    this.state.tasks.splice(e.target.id,1)
    this.setState({
      tasks : this.state.tasks
    })
  }


  render() {
    return (
      <div className="d-flex flex-column m-3">
        <h1>To do list</h1>
        <Form 
          addTask= {this.addTask}
        />

        <List 
          tasks = {this.state.tasks}
          deleteTask = {this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
