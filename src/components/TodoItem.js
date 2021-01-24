import React, {
 useState 
} from 'react';
import clsx from 'clsx';

function TodoItem({
  todo,
  handleDelete,
  handleToggleIsDone,
  updateIsEdit,
  handleSave,
}) {
  const [tempTodo, setTempTodo] = useState(todo.title);

  const handleKeyDown = (e) => {
    console.log({
      keyCode: e.keyCode,
      key: e.key,
    });

    if (e.keyCode === 27) {
      //取消儲存
      updateIsEdit({
        todoId: todo.id,
        isEdit: false,
      });
      //把tempTodo修改成之前的內容
      setTempTodo(todo.title);
      // return;
    }

    // keyCode 13 一定是 enter，但 enter 的 keyCode 不一定是 13
    if (e.keyCode === 13 && tempTodo.trim().length !== 0) {
      handleSave({
        todoId: todo.id,
        title: tempTodo,
      });
    }

    console.log('測試無法確保印出更改後的state=>', tempTodo);
  };

  return (
    // <div className="task-item">
    <div
      className={clsx('task-item', {
        done: todo.isDone,
        edit: todo.isEdit,
      })}
    >
      <div className="task-item-checked">
        <span
          className="icon icon-checked"
          onClick={handleToggleIsDone({
            todoId: todo.id,
          })}
        />
      </div>
      <div className="task-item-body">
        <span
          className="task-item-body-text"
          onDoubleClick={() =>
            updateIsEdit({
              todoId: todo.id,
              isEdit: true,
            })
          } //!這樣可
        >
          {todo.title}
        </span>
        <input
          className="task-item-body-input"
          type="text"
          value={tempTodo}
          onChange={(e) => setTempTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="task-item-action">
        <button
          className="icon btn-delete btn-reset"
          onClick={handleDelete({
            todoId: todo.id,
          })}
        >
          {''}
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
