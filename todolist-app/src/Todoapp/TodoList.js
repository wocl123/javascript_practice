import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import styles from "./styles/TodoList.module.scss";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className={styles.item}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
