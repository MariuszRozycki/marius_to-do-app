import React from "react";

function ToDo({ text, todo, todos, setTodos }) {

  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  const checkedHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
    }))
    console.log(todos);
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button className="complete-btn" onClick={checkedHandler}>Done</button>
      <button className="trash-btn" onClick={deleteHandler}>Remove</button>
    </div>
  )
}

export default ToDo;