import React, { useState, useEffect } from 'react';
import { If, Then, Else } from 'react-if';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel'
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button';

function ToDo(props) {
  const [list, setList] = useState([]);
  const [isOpen, setUpdateForm] = useState(false);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  }

  const toggleComplete = id => {

    let item = list.filter(item => item._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
  };

  const deleteItem = id => {
    let item = list.filter(item => item._id === id)[0] || {};
    if (item._id) {
      let newList = list.filter(items => items !== item);
      setList(newList);
    }
  }

  const updateItem = async id => {
    if (!isOpen) {
      let formState = await !isOpen;
      setUpdateForm(formState);
    }
    let item = list.filter(item => item._id === id)[0] || {};

    document.querySelector('#updateText').value = item.text;
    document.querySelector('#updateAssignee').value = item.assignee;
    document.querySelector('#updateDifficulty').value = item.difficulty;
    document.querySelector('#updateId').value = item._id;
  }

  const handleUpdateForm = event => {
    event.preventDefault();
    let id = document.querySelector('#updateId').value;
    let item = list.filter(item => item._id === parseInt(id))[0];
    let index = list.indexOf(item);
    
    item.text = document.querySelector('#updateText').value;
    item.assignee = document.querySelector('#updateAssignee').value;
    item.difficulty = document.querySelector('#updateDifficulty').value;
    
    let newList = list;
    newList[index] = item;
    setList(newList);
    setUpdateForm(!isOpen);
  }

  const closeUpdateForm = event => {
    event.preventDefault()
    let formState = !isOpen;
    setUpdateForm(formState);
  }

  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];
    setList(list);
  }, []);

  return (
    <>
      <div id="counterDiv">
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </div>
      <section className="todo">
        <If condition={!isOpen}>
          <Then>
            <div>
              <TodoForm handleSubmit={addItem} />
            </div>
            <div>
              <TodoList
                list={list}
                handleComplete={toggleComplete} handleDelete={deleteItem} handleUpdate={updateItem}
              />
            </div>
          </Then>
          <Else>
            <div className="formsDiv">
              <h3>Update Item</h3>
              <Form onSubmit={handleUpdateForm}>
                <FormGroup>
                  <FormControl id="updateId" type="number" hidden />
                  <FormLabel>
                    To Do Item
                    <FormControl id="updateText" type="text" name="text" />
                  </FormLabel>
                  <FormLabel>
                    Difficulty Rating
                  <FormControl defaultValue="1" id="updateDifficulty" type="range" min="1" max="5" name="difficulty" />
                  </FormLabel>
                  <FormLabel>
                    Assigned To
                    <FormControl id="updateAssignee" type="text" name="assignee" />
                  </FormLabel>
                  <FormLabel>
                    Due Date
                    <FormControl id="dueDateUpdate" type="date" name="dueDate" />
                  </FormLabel>
                </FormGroup>
                <Button type="submit" variant="primary" >
                  Update
                </Button>
                <Button id="closeUpdateForm" type="submit" variant="primary" onClick={closeUpdateForm}>
                  Close
                </Button>
              </Form>
            </div>
          </Else>
        </If>
      </section>
    </>
  );
}

export default ToDo;
