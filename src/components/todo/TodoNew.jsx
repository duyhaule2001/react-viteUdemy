const TodoNew = (props) => {
  const { addNewToDo } = props;
  // addNewToDo("hau");
  return (
    <div className="todo-new">
      <input type="text" />
      <button>Add</button>
    </div>
  );
};

export default TodoNew;
