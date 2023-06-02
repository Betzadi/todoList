import { useEffect, useState } from "react";
import { AppUI } from "./AppUI";
//import './App.css';
/*const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar Curso", completed: false },
  { text: "Preparar comida", completed: false },
];*/

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [item, setItem] = useState(initialValue);
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (error) {
      setError(true);
    }
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

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

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      todosCompleted={todosCompleted}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
