import React, { Fragment, useContext } from "react";
import { TodoContext } from "../TodoContext";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    useContext(TodoContext);

  return (
    <Fragment>
      <TodoCounter  />

      <TodoSearch />
      <TodoList>
        {error && <p>ERROR</p>}
        {loading && <p>Estamos cargando ,no desesperes</p>}
        {!loading && !searchedTodos.lenght && <p>Crea tu primer todo</p>}
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
