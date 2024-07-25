import TodoData from "./components/todo/TodaData";
import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewToDo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(0, 1000000),
      name: name,
    };

    setTodoList([...todoList, newTodo]);
  };
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">ToDo List</h1>
      <TodoNew addNewToDo={addNewToDo} />
      <TodoData todoList={todoList} />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  );
};

export default App;
