import { Fragment, useState } from "react";
import {CreateTodoButton} from "./createTodoButton/CreateTodoButton";
import { TodoCounter } from "./todoCounter/TodoCounter";
import { TodoItem } from "./todoItem/TodoItem";
import { TodoList } from "./todoList/TodoList";
import { TodoSearch } from "./todoSearch/TodoSearch";
//import './App.css';
const defaultTodos =[
  {text: 'Cortar cebolla',completed: false},
  {text: 'Tomar Curso',completed: false},
  {text: 'Preparar comida',completed: false}
  ];
function App() {
  const [todos,setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] =useState('');
  const todosCompleted = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  let searchedTodos =[];
  if( !searchValue.length>= 1 ){
    searchedTodos = todos;
  }

  return (
    <Fragment>
      
    <TodoCounter
    totalTodos = {totalTodos}
    todosCompleted = {todosCompleted}
    />
   
    <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
     
    <TodoList>
     
     {searchedTodos.map(todo => (
      <TodoItem key={todo.text}  text={todo.text} completed = {todo.completed}/>
       ))}
    
    </TodoList>
    
    <CreateTodoButton/>
   
    </Fragment>
  );
}

export default App;
