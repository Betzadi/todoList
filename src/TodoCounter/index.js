import React, { useContext } from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

function TodoCounter( ) {
    const {todosCompleted,totalTodos} = useContext(TodoContext);
    return(
        <h2 className="TodoCounter">Has completado {todosCompleted} de {totalTodos} TODOs</h2>
    );}export {TodoCounter}