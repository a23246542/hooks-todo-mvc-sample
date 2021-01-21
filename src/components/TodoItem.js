import React from 'react'
import clsx from 'clsx'

function TodoItem({todo}) {
  return (
    // <div className="task-item">
    <div className={clsx('task-item',{
      done:todo.isDone,
      edit:todo.isEdit,
    })}
    >
      <div className="task-item-checked">
        <span className="icon icon-checked"/>
      </div>
      <div className="task-item-body">
        <span className="task-item-body-text">
          {todo.title}
        </span>
        <input
          className="task-item-body-input"
          type="text"
        />
      </div>
      <div className="task-item-action">
        <button className="icon btn-delete btn-reset ">
          {''}
        </button>
      </div>
    </div>

  )
}

export default TodoItem
