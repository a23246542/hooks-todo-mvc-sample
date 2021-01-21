import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Footer from './components/Header';

function App() {
  return (
    <div className="app">
        <Header/>
        <AddTodo/>
        <Todos/>
        <Footer/>
    </div>
  );
}

export default App;
