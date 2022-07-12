import React from "react";

function Form() {
  return (
    <form>
      <input type="text" className="to-do--input" />
      <button className="to-do--button" type="submit">Add task</button>
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