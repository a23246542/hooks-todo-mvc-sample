import React from 'react';
import clsx from 'clsx';

function AddTodo({
 inputValue, handleChange, handleAddTodo, handleKeyPress 
}) {
  return (
    // <div className="add-todo">
    <div
      className={clsx('add-todo', {
        active: inputValue.length > 0,
      })}
    >
      <label className="add-todo-icon icon" htmlFor="add-todo-input"></label>
      <div className="add-todo-input">
        <input
          id="add-todo-input"
          type="text"
          placeholder="新增工作"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="add-todo-action">
        <button className="btn-add" onClick={handleAddTodo}>
          新增
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
