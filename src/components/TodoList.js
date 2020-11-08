import React from 'react'
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import './TodoList.css'
import Task from './Task'
function TodoList() {
    const Items = useSelector(state => state.listItem)
    
    
    return (
        <ListGroup variant="flush">
            {Items.map((el,key) =>
             { return(
                <div key={key} >
                    <Task el={el}/>
                </div>
           ) }) }
        </ListGroup>
    )
}

export default TodoList
