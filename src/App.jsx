import TodoData from "./components/todo/TodaData";
import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

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

  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };

  return (
    <>
      <Header />
      <div className="todo-container">
        <h1 className="todo-title">ToDo List</h1>
        <TodoNew addNewToDo={addNewToDo} />
        {todoList.length === 0 ? (
          <div className="todo-image">
            <img className="logo" src={reactLogo} />
          </div>
        ) : (
          <TodoData todoList={todoList} deleteTodo={deleteTodo} />
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
