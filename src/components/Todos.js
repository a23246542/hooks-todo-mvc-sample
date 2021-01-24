import React from 'react';
import TodoItem from './TodoItem';

function Todos({
  todos,
  handleDelete,
  handleToggleIsDone,
  updateIsEdit,
  handleSave,
}) {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleToggleIsDone={handleToggleIsDone}
            updateIsEdit={updateIsEdit}
            handleSave={handleSave}
          />
        );
      })}
    </div>
  );
}

export default Todos;
