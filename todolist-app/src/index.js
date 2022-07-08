import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Todoapp/App";
import { Provider } from "react-redux";
import store from "./Todoapp/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
