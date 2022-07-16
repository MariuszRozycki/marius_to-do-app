import React from "react";

import ToDo from "./ToDo";

function ToDoList({ todos, setTodos }) {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <ToDo
            key={index}
            text={todo.text}
            setTodos={setTodos}
            todo={todo}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  )
}

export default ToDoList;