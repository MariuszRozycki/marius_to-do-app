import React, { useState } from "react";

function Form() {
  const [inputText, setInputText] = useState("");
  const [toDo, setToDo] = useState([]);
  console.log("toDo", toDo);

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitToDoHandler = (e) => {
    e.preventDefault();
    setToDo([
      ...toDo,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000
      }
    ]);
    setInputText("");
  }

  return (
    <form>
      <input value={inputText} type="text" className="to-do--input" onChange={inputTextHandler} />
      <button className="to-do--button" type="submit" onClick={submitToDoHandler}>Add task</button>
      <div className="select">
        <select name="to-do--options" id="to-do--options" className="filter-options">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;