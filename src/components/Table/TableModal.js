import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const TableModal = (props) => {
  const { showModal, closeHandler, todoName, setTodoName, addHandler } = props;

  const onInputChange = (value) => {
    setTodoName(value);
  };
  return (
    <Modal show={showModal} onHide={closeHandler}>
      <Modal.Header closeButton>
        <Modal.Title>Add Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder="Todo Name"
          value={todoName}
          onChange={(e) => onInputChange(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeHandler}>
          Close
        </Button>
        <Button variant="primary" onClick={addHandler}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TableModal;
