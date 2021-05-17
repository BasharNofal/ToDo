import React from 'react';

function ToDoList(props) {

  return (
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}>
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text }
            <p style={{textAlign:'right', margin:0}} >{`Assigned to: ${item.assignee}`}</p>
          </span>
          <button onClick={() => props.handleDelete(item._id)}>Delete</button>
          <button onClick={() => props.handleUpdate(item._id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
