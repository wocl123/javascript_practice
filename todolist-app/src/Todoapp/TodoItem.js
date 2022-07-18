import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "./redux/todoSlice";
import styles from "./styles/TodoItem.module.scss";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const TodoItem = ({ id, title, completed }) => {
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef(null);

  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  useEffect(() => {
    if (toggle) {
      toggleRef.current.focus();
    }
  }, [toggle]);

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
