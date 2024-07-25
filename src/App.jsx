import TodoData from "./components/todo/TodaData";
import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" },
  ]);
  const hoidanit = "Hau";
  const age = 23;
  const data = {
    address: "vinhphuc",
    country: "vietnam",
  };

  const addNewToDo = (name) => {
    alert(`call me ${name}`);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">ToDo List</h1>
      <TodoNew addNewToDo={addNewToDo} />
      <TodoData name={hoidanit} age={age} data={data} todoList={todoList} />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  );
};

export default App;
