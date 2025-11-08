import React, { useState } from "react";

interface Todo {
  id: number;
  task: string;
  done: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todosInfo = { id: todos.length + 1, task: "coding", done: false };

  return (
    <div>
      <button onClick={() => setTodos([...todos, todosInfo])}>Add Todo</button>

      {todos.map((todo) => (
        <p key={todo.id}>{todo.task}</p>
      ))}

      <button onClick={() => setTodos([])}>clear</button>
    </div>
  );
};

export default TodoList;
