import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "./redux/todoSlice";
import styles from "./styles/TodoItem.module.scss";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <li className={styles.item_list}>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompleteClick}
        />
        <span className={completed ? styles.check : styles.no_check}>
          {title}
        </span>

        <button onClick={handleDeleteClick}>
          <MdOutlineRemoveCircleOutline />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
