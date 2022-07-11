import React from "react";
import ReactDOM from "react-dom/client";
// import App1 from "./App1";
import { Provider } from "react-redux";
// import store from "./redux_first/store";
import App from "./Todoapp/App";
import store from "./Todoapp/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <Provider store={store}>
  //     <App1 />
  //   </Provider>
  <Provider store={store}>
    <App />
  </Provider>
);
