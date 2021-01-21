import React from 'react'
import clsx from 'clsx'

function AddTodo() {
  return (
    <div className="add-todo">
      <label className="add-todo-icon icon" htmlFor="add-todo-input"></label>
      <div className="add-todo-input">
        <input
          id="add-todo-input"
          type="text"
          placeholder="新增工作"
        />
      </div>
      <div className="add-todo-action">
        <button className="btn-add">新增</button>
      </div>
    </div>
  )
}

export default AddTodo
