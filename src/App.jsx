import TodoData from "./components/todo/TodaData";
import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";

const App = () => {
  const hoidanit = "Hau";
  const age = 23;
  const data = {
    address: "vinhphuc",
    country: "vietnam",
  };
  return (
    <div className="todo-container">
      <h1 className="todo-title">ToDo List</h1>
      <TodoNew />
      <TodoData name={hoidanit} age={age} data={data} />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  );
};

export default App;
