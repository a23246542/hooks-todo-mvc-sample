import './App.scss';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Footer from './components/Footer';
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

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
    isDone: true,
    isEdit: false,
  },
  {
    id: uuidv4(),
    title: '自動 focus（useRef）',
    isDone: false,
    isEdit: true,
  },
]

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(todoList);

  const numOfTodos = todoList.filter(todo => !todo.isDone).length;

  const handleChange = (e) => {
    // setInputValue(e.target.value.trim());//存
    setInputValue(e.target.value);
  }

  const handleAddTodo = () => {

    if(inputValue.trim().length === 0){
      return;
    }
    // console.log('保存');
    setTodos((preState) => {

      setInputValue('');//@@

      return [
        ...preState,
        {
          id:uuidv4(),
          title:inputValue.trim(),
          isDone: false,
          isEdit: false,
        }
      ]
    })

    // setInputValue('');//@@
  }

  const handleKeyPress = (e) => {
    console.log(e); //@@中文鍵盤的問題不見了
    if (e.key!=="Enter") {
      return;
    }
    handleAddTodo();
  }

  const handleDelete = ({todoId}) => () => {
    // setTodos((preState)=>{
    //   return preState.filter(todo=>{
    //     return todo.id !== todoId;
    //   })
    // })
    setTodos((preState) => preState.filter(todo => todo.id!== todoId))
  }

  const handleToggleIsDone = () => {}

  const updateIsEdit = () => {}

  const handleSave = () => {}

  return (
    <div className="app">
      <Header/>
      <AddTodo
        inputValue={inputValue}
        handleChange={handleChange}
        handleAddTodo={handleAddTodo}
        handleKeyPress={handleKeyPress}
      />
      <Todos
        todos={todos}
        handleDelete={handleDelete}
        />
      <Footer numOfTodos={numOfTodos}/>
    </div>
  );
}

export default App;
