const TodoNew = (props) => {
  const { addNewToDo } = props;
  // addNewToDo("hau");
  const handleClick = () => {
    alert("hello");
  };

  const handleOnChange = (name) => {
    console.log("handleOnChange", name);
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
    </div>
  );
};

export default TodoNew;
