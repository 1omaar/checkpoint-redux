import React,{ useState } from 'react'
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editItem } from "../JS/Actions/actions";


function EditTask({items}) {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(items.text)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    return (
      <>
      
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form.Group>
                        <Form.Control type="text" placeholder="" value={edit} onChange={(e)=> setEdit(e.target.value)}/>
                </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {handleClose();setEdit(items.text)}}>
              Close
            </Button>
            <Button variant="primary" onClick={() =>{handleClose();dispatch(editItem({id:items.id , text:edit , done:items.done}))}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default EditTask
