import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList';
import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
      </TodoList>
      {/* <createTodoButton/> */}
    </div>

  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>llorar con la llorona </p>
      <span>X</span>
    </li>
    
  );
}

export default App;
