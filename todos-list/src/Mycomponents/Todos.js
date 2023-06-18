import React from 'react';
import TodoItem from "./TodoItem";
import './Todo.css';
const Todos = (props) => {
  return (
    <div>
      <h3 className='text-center my-h3'>TODOS LIST</h3>
      <div className='todo-container'>
        {props.todos.length === 0 ? (
          <p>No Todos To Display</p>
        ) : (
          props.todos.map((todo) => (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default Todos;