import React, { useState } from 'react';

import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Mariusz's To Do App</h1>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
