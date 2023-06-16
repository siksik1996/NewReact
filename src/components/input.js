import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentsChange = (e) => {
    setContents(e.target.value);
  };

  return (
    <form onSubmit={handleSubmitClick}>
      제목 : <input value={title} onChange={handleTitleChange}></input>
      내용 : <input value={contents} onChange={handleContentsChange}></input>
      <button>추가</button>
    </form>
  );
}

export default Input;
