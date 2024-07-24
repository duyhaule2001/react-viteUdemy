const TodoData = (props) => {
  const { name, data, age } = props;
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div>Learning React</div>
      <div>Watching youtube</div>
    </div>
  );
};

export default TodoData;
