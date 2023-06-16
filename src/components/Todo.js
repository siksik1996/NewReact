function Todo({ item, isActive, setTodos }) {
  const handleDeleteClick = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };
  const handleSwitchClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };
  return (
    <div
      style={{
        border: "1px solid black",
      }}
      key={item.id}
    >
      <h5>{item.title}</h5>
      <p>{item.contents}</p>
      <button onClick={handleSwitchClick}>{isActive ? "완료" : "취소"}</button>
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

export default Todo;
