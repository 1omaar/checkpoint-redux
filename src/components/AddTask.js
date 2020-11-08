import React, { useState } from 'react'
import  "./AddTask.css";
import {  Form, Button } from "react-bootstrap";
import { addItem } from "../JS/Actions/actions";
import { useDispatch } from "react-redux";
function AddTask() {
const [myTask, setMytask] = useState('')
  const dispatch = useDispatch()
  
  const add = () => {
    if (myTask){
    dispatch(addItem({id:Math.random(),text:myTask,done:false}));
    setMytask('');
    }else {
      alert('douwwiww')
    }
  }

  
    return (
        <div className="add-container">
            <h1>To Do App</h1>
            <Form.Group className='add-design' >
                    <Form.Control 
                    type="text" placeholder="Add Item" 
                    onChange={(e) => setMytask(e.target.value)}
                    value={myTask} /> 
                    <Button className='addbtn' variant="success" size="lg" onClick={add}>Add Item</Button>
                    
             </Form.Group>
        </div>
    )
}

export default AddTask
