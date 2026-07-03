import { useEffect, useState } from "react";
import { getTodos } from "../../services/TodoService";
import { IconRefresh } from "../icons";
import "./todo-count.style.css";

export function ToDoCount() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    setIsLoading(true);
    const todosFromApi = await getTodos();
    setCount(todosFromApi.length);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-count-container">
      <span className="todo-count">{count}</span>
      <button
        disabled={isLoading}
        className="btn"
        aria-label="refresh"
        onClick={() => fetchTodos()}
      >
        <IconRefresh />
      </button>
    </div>
  );
}
