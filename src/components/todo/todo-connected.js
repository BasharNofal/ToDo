import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './form.js';
import TodoList from './list.js';
// import PaginationEditor from './pagination'
import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const ToDo = () => {
  
  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item.due = new Date();
    axios.post(todoAPI, item, {
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        setList([...list, response.data])
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      axios.put(url, item, {
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => {
          setList(list.map(listItem => listItem._id === item._id ? response.data : listItem));
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    axios.get(todoAPI, { mode: 'cors' })
      .then(data => setList(data.data.results))
      .catch(console.error);
  };

  const _deleteItem = id => {
    let item = list.filter(item => item._id === id)[0] || {};
    if (item._id) {
      let newList = list.filter(items => items !== item);
      setList(newList);
    }
    let url = `${todoAPI}/${id}`;

    axios.delete(url, { mode: 'cors' }).then(() => {
      console.log('deleted');
    }).catch(error => {
      console.error(error)
    });
  }

  useEffect(_getTodoItems, []);

  return (
    <>
      <div id="counterDiv">
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </div>

      <section className="todo">
        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>
        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem}
            handleList={setList}
            getAllItems={_getTodoItems} />
        </div>
      </section>
    </>
  );
};

export default ToDo;