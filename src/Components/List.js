import React, { Component } from 'react';

class List extends Component {
    render() { 

        const {tasks, deleteTask} = this.props
        
        return (
            <div>
                <h2>List</h2>
                {tasks.map( (e,i) => ( 
                    <div className="d-flex justify-content-between border rounded p-2">
                        <div className="d-flex flex-column">
                            <p className="fw-bold">Description</p>
                            <p>{e.description}</p>
                        </div>                     

                        {/* Boutons Modifier et Supprimer */}
                        <div className="d-flex">

                            <div className="d-flex flex-column me-4">
                                <p className="fw-bold">Statut</p>
                                <p>{e.status}</p>
                            </div>

                            {/* Bouton Modifier */}
                            <div class="input-group align-items-center mt-4 mb-4 me-4">
                                <button type="button" class="btn btn-outline-secondary">Modify</button>
                                <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">To do</a></li>
                                    <li><a class="dropdown-item" href="#">Doing</a></li>
                                    <li><a class="dropdown-item" href="#">Done</a></li>
                                </ul>
                            </div>

                            {/* Bouton Supprimer */}
                            <button
                                type="button" 
                                className="btn btn-outline-danger d-flex align-items-center mt-4 mb-4 me-4"
                                onClick={deleteTask}
                                id={i}
                                >Delete 
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        );
    }
}

export default List;