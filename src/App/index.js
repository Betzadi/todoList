import { useState } from "react";
import { AppUI } from "./AppUI";
//import './App.css';
/*const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar Curso", completed: false },
  { text: "Preparar comida", completed: false },
];*/

function useLocalStorage(itemName , initialValue){
 const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;  

  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue))
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item,setItem] = useState(parsedItem);
 
  

  const saveItem = (newItem) =>{
    const stringifiedTodos =JSON.stringify(newItem);
    localStorage.setItem(itemName,stringifiedTodos);
   setItem(newItem);
  };
  return [
    item,
    saveItem,
  ];
}

function App() {

  const [todos,saveTodos] = useLocalStorage('TODOS_V1',[]);

  const [searchValue, setSearchValue] = useState("");


  const todosCompleted = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newItem = [...todos];

    newItem[todoIndex].completed = true;
    saveTodos(newItem);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newItem = [...todos];

    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
  };

  return <AppUI 
  totalTodos={totalTodos} 
  todosCompleted={todosCompleted}
  searchValue={searchValue} 
  setSearchValue={setSearchValue}
  searchedTodos ={searchedTodos}
  completeTodo ={completeTodo}
  deleteTodo = {deleteTodo}
  
  />;
}

export default App;
