import React from "react";

import ToDo from "./ToDo";

function ToDoList({ todos, setTodos, filteredTodos }) {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
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