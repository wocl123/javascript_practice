import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TotalCount from "./TotalCount";
import styles from "./styles/App.module.scss";

const date = new Date();
const year = date.getFullYear();
const monthNames = [
  "JAN",
  "FAB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const month = monthNames[date.getMonth()];
const day = date.getDate();

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.date_area}>
          <div className={styles.left_col}>
            <div className={styles.day_area}>{day}</div>
          </div>
          <div className={styles.right_col}>
            <div className={styles.month_area}>{month}</div>
            <div className={styles.year_area}>{year}</div>
          </div>
        </div>
        <div className={styles.title}>Todo App</div>
      </div>
      <TodoForm />
      <TodoList />
      <TotalCount />
    </div>
  );
}

export default App;
