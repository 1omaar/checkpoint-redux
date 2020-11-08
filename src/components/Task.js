import React, {useState} from 'react'
import EditTask from './EditTask'
import { ListGroup,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import './Task.css'
import { doneItem } from "../JS/Actions/actions";
function Task({el}) {
const dispatch = useDispatch()
if (el.done===false){
    return (
        <div>
            <ListGroup.Item  className='item-design'>
                   {el.text}
                   <div className='btn-container'>
                        <EditTask items={el}/> 
                        <Button className='btn-design' variant="dark" onClick={() => dispatch(doneItem(el.id))}>{el.done?'Is Done':'Done'}</Button>
                   </div>
            </ListGroup.Item>
        </div>
    )
} else {
    return (
        <div>
            <ListGroup.Item  className='item-design'>
                   <div className='btn-container'>
                       
                        <Button className='btn-design' variant="dark" onClick={() => dispatch(doneItem(el.id))}>{el.done?'Is Done':'Done'}</Button>
                   </div>
            </ListGroup.Item>
        </div>
    )
}}

export default Task
