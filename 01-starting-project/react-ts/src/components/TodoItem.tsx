import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
  deleteTodo: (text: string) => void;
}> = (props) => {
  return (
    <li
      className={classes.item}
      key={props.item.id}
      onClick={props.deleteTodo(props.item.text)}
    >
      {props.item.text}
    </li>
  );
};

export default TodoItem;
