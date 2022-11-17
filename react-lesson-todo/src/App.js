import TodoList from "./TodoList";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const toggleTodo = (id) => {
    const newTodos =[...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleAddTodo = () => {
    // add task
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const handleClear = () => {
    const delTodos = todos.filter((todo) => !todo.completed);
    setTodos(delTodos);
  }

  return (
  <div className="all">
    <div className="title">Todo List</div>
    <div className="input">
      <input type="text" ref={todoNameRef}/>
      <button className="plus" onClick={handleAddTodo}>+</button>
    </div>
    <button className="delete" onClick={handleClear}>完了したタスクの削除<span>×</span></button>
    <div>残りのタスク : {todos.filter((todo) => !todo.completed).length}</div>
    <div className="taskArea"><TodoList todos = {todos} toggleTodo = {toggleTodo}/></div>
  </div>
  );
}
    

export default App;
