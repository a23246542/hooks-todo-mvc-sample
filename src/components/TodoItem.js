import React from 'react'

function TodoItem() {
  return (
    <div className="task-item">
      <div className="task-item-checked">
        <span className="icon icon-checked"/>
      </div>
      <div className="task-item-body">
        <span className="task-item-body-text">
          切圖
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
