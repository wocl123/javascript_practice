import React from "react";
import ReactDOM from "react-dom/client";
import Effects from "./Effects";
import Cleanup from "./Cleanup";
import ToDoList from "./ToDoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Effects />);
// root.render(<Cleanup />);
// root.render(<App />);
root.render(<ToDoList />);
