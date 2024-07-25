const TodoData = (props) => {
  const { name, data, age, todoList } = props;
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div>Learning React</div>
      <div>Watching youtube</div>
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};

export default TodoData;
