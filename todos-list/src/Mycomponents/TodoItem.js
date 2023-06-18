import React from 'react';
import './Todo.css';
const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className='TodoItemStyle'>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='buttonStyle' onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;