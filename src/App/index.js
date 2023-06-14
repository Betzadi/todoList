import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
//import './App.css';
/*const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar Curso", completed: false },
  { text: "Preparar comida", completed: false },
];*/



function App() {
  

  return (
  <TodoProvider>
  <AppUI/>
  </TodoProvider>
  );
}

export default App;
