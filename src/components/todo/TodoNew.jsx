import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("");
  const handleClick = () => {
    alert("hello");
  };

  const handleOnChange = (name) => {
    setValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        onChange={(event) => handleOnChange(event.target.value)}
        type="text"
      />
      <button onClick={handleClick} style={{ cursor: "pointer" }}>
        Add
      </button>
      <div>My text input = {valueInput}</div>
    </div>
  );
};

export default TodoNew;
