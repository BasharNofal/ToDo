import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';
function ToDoList(props) {

  return (
    <ul>
      {props.list.map(item => (
        <li className={`complete-${item.complete.toString()}`}

          key={item._id}>
          <Toast>
            <ToastHeader>
              <span className={`rounded mr-2 mySpan`} onClick={() => props.handleComplete(item._id)} >{item.complete ? "Complete" : "Pending"}</span>
              <span className="mr-auto" ><b>{item.assignee}</b></span>
              <b className="closeBtn" onClick={() => props.handleDelete(item._id)}>X</b>
            </ToastHeader>
            <ToastBody>
              <p> <b>{item.text}</b> </p>
              <small>{`Difficulty: ${item.difficulty}`}</small>
              </ToastBody>
          </Toast>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
