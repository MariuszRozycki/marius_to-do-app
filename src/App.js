import React from 'react';

import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>Mariusz's To Do App</h1>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
