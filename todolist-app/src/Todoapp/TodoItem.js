import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, changeTodo } from "./redux/todoSlice";
import styles from "./styles/TodoItem.module.scss";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const TodoItem = ({ id, title, completed }) => {
  const [toggle, setToggle] = useState(false);
  const [newText, setNewText] = useState(title);
  const toggleRef = useRef(null);

  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };
  const onClickEditButton = () => {
    setToggle(!toggle);
    console.log(newText);
  };
  const onClickSubmitButton = () => {
    dispatch(changeTodo({ id: id, title: title }));
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
        {!toggle ? (
          <button
            type="button"
            className={styles.toggle_button}
            onClick={onClickEditButton}
          >
            수정하기
          </button>
        ) : (
          <button
            type="button"
            className={styles.toggle_fin}
            onClick={onClickSubmitButton}
          >
            수정완료
          </button>
        )}
        <button onClick={handleDeleteClick}>
          <MdOutlineRemoveCircleOutline />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
