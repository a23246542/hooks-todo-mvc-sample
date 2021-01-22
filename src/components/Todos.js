import React from 'react'
import TodoItem from './TodoItem';

function Todos({
  todos,
  handleChange,
  handleDelete
}) {
    return (
      <div className="todos">
        {
          todos.map((todo)=>{
            return <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
            />
          })
        }
      </div>
    )
}

export default Todos
