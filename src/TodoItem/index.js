import React from "react";
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <svg 
        className={`iconCheck ${props.completed && 'iconCheck--active'}`}
        height="40"
        width="40"
        onClick={props.onComplete}
      >
       <path d="M 25 13 A 10 10 0 1 0 30 20 m 0 0 z M 15 20 l 5 5 L 33 10 " />
      </svg>
      <p className={`TodoItemText ${props.completed && 'TodoItemText--completed'}`}>{props.text}</p>
      <svg
        className={`iconDump ${props.completed && 'iconDump--active'}`}
        height="40"
        width="40"
        onClick={props.onDelete}
      >
       <path d="M 8 10 L 32 10 m 0 0 z M15 10 l 0 -3 l 2 -2 l 6 0 l 2 2 l 0 3 z" />
       <path d="M10 15 l 20 0 l -3 20 l -14 0 l -3 -20" />
       <path d="M15 18 l 1 14 z M 20 18 l 0 14 z M 25 18 l -1 14" />
      </svg>
    </li>
  )
}

export { TodoItem };