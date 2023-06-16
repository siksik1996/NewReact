import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/input";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <Header>신윤식의 TodoList</Header>
      <main
        style={{
          margin: "0 auto",
          textalign: "center",
          padding: "20px",
          background: "#83abeb",
        }}
      >
        <Input setTodos={setTodos}></Input>
        <TodoList isActive={true} todos={todos} setTodos={setTodos}></TodoList>
        <TodoList isActive={false} todos={todos} setTodos={setTodos}></TodoList>
      </main>
    </div>
  );
}

export default App;
const initialState = [
  {
    title: "제목1",
    contens: "내용1",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "제목2",
    contens: "내용2",
    isDone: true,
    id: uuidv4(),
  },
  {
    title: "제목3",
    contens: "내용3",
    isDone: false,
    id: uuidv4(),
  },
];
