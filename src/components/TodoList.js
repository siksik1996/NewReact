import Todo from "./Todo";

function TodoList({ isActive, todos, setTodos }) {
  return (
    <div>
      <h4>{isActive ? "Working..." : "Done...!"}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return <Todo item={item} isActive={isActive} setTodos={setTodos}></Todo>;
        })}
    </div>
  );
}

export default TodoList;
