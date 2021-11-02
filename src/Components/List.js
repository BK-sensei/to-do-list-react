import React, { Component } from 'react';

class List extends Component {
    render() { 

        const {tasks} = this.props
        console.log(tasks);
        
        return (
            <div>
                <h2>List</h2>
                {tasks.map( e => ( 
                    <div className="d-flex justify-content-between border rounded m-2 p-2">
                        <div className="d-flex flex-column">
                            <p className="fw-bold">Description</p>
                            <p>{e.description}</p>
                        </div>                     
                        <div className="d-flex flex-column">
                            <p className="fw-bold">Statut</p>
                            <p>{e.status}</p>
                        </div> 
                    </div>

                ))}
            </div>
        );
    }
}

export default List;