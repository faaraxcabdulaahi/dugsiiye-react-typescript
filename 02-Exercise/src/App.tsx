import React from "react";
import Counter from "./components/Counter";
import UserState from "./components/UserState";
import TodoList from "./components/TodoList";

const App = () => {
  return <div>
    <Counter/>
    <UserState/>
    <TodoList/>
  </div>;
};

export default App;
