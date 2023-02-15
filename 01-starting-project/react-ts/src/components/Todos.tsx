import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; deleteTodo: () => void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => {
        return <TodoItem item={item} deleteTodo={props.deleteTodo} />;
      })}
    </ul>
  );
};

export default Todos;
