import React from "react";
import ReactDOM from "react-dom/client";
import Effects from "./Effects";
import Cleanup from "./Cleanup";
import ToDoList from "./ToDoList";
import CoinTracker from "./CoinTracker";
import MovieApp from "./MovieApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Effects />);
// root.render(<Cleanup />);
// root.render(<App />);
// root.render(<ToDoList />);
// root.render(<CoinTracker />);
root.render(<MovieApp />);
