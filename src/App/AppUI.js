import React,{Fragment} from "react";

import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function AppUI({
  loading,
  error,

  totalTodos,
  todosCompleted,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <Fragment>
      <TodoCounter totalTodos={totalTodos} todosCompleted={todosCompleted} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {error && <p>ERROR</p>}
        {loading && <p>Estamos cargando ,no desesperes</p>}
        {(!loading  && !searchedTodos.lenght)&& <p>Crea tu primer todo</p>}   
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </Fragment>
  );
}
export { AppUI };
