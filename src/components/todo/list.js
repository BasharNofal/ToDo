import React from 'react';

function ToDoList(props) {

  return (
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}>
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
          <button onClick={() => props.handleDelete(item._id)}>Delete</button>
          <button onClick={() => props.handleUpdate(item._id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
