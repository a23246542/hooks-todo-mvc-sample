import React from 'react'
import TodoItem from './TodoItem';

function Todos({
  todos,
  handleChange
}) {
    return (
      <div className="todos">
        {
          todos.map((todo)=>{
            return <TodoItem
              key={todo.id}
              todo={todo}
            />
          })
        }
      </div>
    )
}

export default Todos
