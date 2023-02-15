import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // const todos = [new Todo("learn react"), new Todo("learn typeScript")];
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("learn react"),
    new Todo("learn typeScript"),
  ]);
  const deleteTodo = (todoText: string) => {
    const deleteTodo = new Todo(todoText);
    setTodos((prevTodo) => {
      var index = prevTodo.indexOf(deleteTodo);
      if (index !== -1) {
        return prevTodo.splice(index, 1);
      } else {
        return prevTodo;
      }
    });
  };

  const onAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  return (
    <div>
      <Todos items={todos} deleteTodo={deleteTodo} />
      <NewTodo onAddTodo={onAddTodo} />
    </div>
  );
}

export default App;
