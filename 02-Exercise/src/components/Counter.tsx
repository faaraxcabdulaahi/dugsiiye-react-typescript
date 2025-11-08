import React, { useState } from "react";

type T = number;

const Counter = () => {
  const [todo, setTodo] = useState<T>(0);

  return (
    <div>
      <h2>{todo}</h2>
      <button onClick={() => setTodo(todo + 1)}>+</button>
      <button onClick={() => setTodo(todo - 1)}>-</button>
      <button onClick={()=> setTodo(0)}>Reset</button>

      <button>-</button>
    </div>
  );
};

export default Counter;
