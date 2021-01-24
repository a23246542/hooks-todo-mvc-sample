import React from 'react';
import './App.scss';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Footer from './components/Footer';
import {
 useState, useEffect 
} from 'react';
import {
 v4 as uuidv4 
} from 'uuid';

const todoList = [
  {
    id: uuidv4(),
    title: '編輯 Todo 項目',
    isDone: false,
    isEdit: false,
  },
  {
    id: uuidv4(),
    title: '了解 useEffect 的基本使用',
    isDone: false,
    isEdit: false,
  },
  {
    id: uuidv4(),
    title: '自動 focus（useRef）',
    isDone: false,
    isEdit: false,
  },
];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(todoList);

  const numOfTodos = todoList.filter((todo) => !todo.isDone).length;

  const handleChange = (e) => {
    // setInputValue(e.target.value.trim());//存
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim().length === 0) {
      return;
    }
    // console.log('保存');
    setTodos((preState) => {
      // setInputValue('');//@@inputValue藥用index.js:1 Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
      // at input

      return [
        ...preState,
        {
          id: uuidv4(),
          title: inputValue.trim(),
          isDone: false,
          isEdit: false,
        },
      ];
    });

    setInputValue(''); //@@可確保setTodos後面
  };

  const handleKeyPress = (e) => {
    console.log({
      keyCode: e.keyCode,
      key: e.key,
    }); //@@中文鍵盤的問題不見了
    if (e.key !== 'Enter') {
      return;
    }
    handleAddTodo();
    setInputValue(''); //@@反正不會重新渲染
  };

  const handleDelete = ({
 todoId 
}) => () => {
    // setTodos((preState)=>{
    //   return preState.filter(todo=>{
    //     return todo.id !== todoId;
    //   })
    // })
    setTodos((preState) => preState.filter((todo) => todo.id !== todoId));
  };

  const handleToggleIsDone = ({
 todoId 
}) => () => {
    setTodos((preState) =>
      preState.map((todo) => {
        //換行return!
        if (todo.id !== todoId) {
          return todo;
        } else {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
      })
    );
  };

  /** 不用toggle*/
  //!變成一個坑 在render裡面用ok  組件內用忘記沒執行到
  // const updateIsEdit = ({todoId, isEdit}) => () => {
  const updateIsEdit = ({
 todoId, isEdit 
}) => {
    setTodos((preState) =>
      preState.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        } else {
          return {
            ...todo,
            isEdit,
          };
        }
      })
    );
  };

  /**思考傳參數 */
  const handleSave = ({
 todoId, title 
}) => {
    console.log('handleSave', todoId, title);
    setTodos((preTodos) =>
      preTodos.map((todo) => {
        // if(todo.id!==todoId){/%%%前面有log出來，那一定是這幾行
        if (todo.id !== todoId) {
          return todo; //前面寫錯返回了todo還是isEdit true的
        }

        return {
          //改掉else
          ...todo,
          title,
          isEdit: false,
        };
      })
    );
  };

  return (
    <div className="app">
      <Header />
      <AddTodo
        inputValue={inputValue}
        handleChange={handleChange}
        handleAddTodo={handleAddTodo}
        handleKeyPress={handleKeyPress}
      />
      <Todos
        todos={todos}
        handleDelete={handleDelete}
        handleToggleIsDone={handleToggleIsDone}
        updateIsEdit={updateIsEdit}
        handleSave={handleSave}
      />
      <Footer numOfTodos={numOfTodos} />
    </div>
  );
}

export default App;
