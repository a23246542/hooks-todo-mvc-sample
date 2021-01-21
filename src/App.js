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

  return (
    <div className="app">
      <Header/>
      <AddTodo/>
      <Todos todos={todos}/>
      <Footer numOfTodos={numOfTodos}/>
    </div>
  );
}

export default App;
