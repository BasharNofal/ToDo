import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel'
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button';

function ToDoForm(props) {
  const [item, addNewItem] = useState('');

  const handleInputChange = event => {
    addNewItem({ ...item, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    props.handleSubmit(item);
    addNewItem(item);
  };

  return (
    <>
    <div className="formsDiv">
      <h3>Add To Do Item</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>
            To Do Item
          <FormControl name="text" type="text" placeholder="Item Details" onChange={handleInputChange} />
          </FormLabel>
          <FormLabel>
            Difficulty Rating
            <FormControl name="difficulty" type="range" defaultValue="1" min="1" max="5" onChange={handleInputChange} />
          </FormLabel>
          <FormLabel>
            Assigned To
            <FormControl name="assignee" type="text" placeholder="Assigned Name" onChange={handleInputChange} />
          </FormLabel>
        </FormGroup>
        <Button type="submit" variant="primary" >
          Submit
        </Button>
      </Form>
    </div>
    </>
  );

}

export default ToDoForm;
