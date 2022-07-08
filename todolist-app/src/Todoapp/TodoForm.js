import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice";
import styles from "./styles/TodoForm.module.scss";
import { IoIosAddCircleOutline } from "react-icons/io";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue("");
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <input
        type="text"
        placeholder="Add todo..."
        value={value}
        onChange={onChange}
      />

      <button type="submit">
        <IoIosAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoForm;
