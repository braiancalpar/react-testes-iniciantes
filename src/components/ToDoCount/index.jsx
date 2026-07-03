import { useEffect, useState } from "react";
import { getTodos } from "../../services/TodoService";
import "./todo-count.style.css";

export function ToDoCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosFromApi = await getTodos();
      setCount(todosFromApi.length);
    };

    fetchTodos();
  }, []);

  return <span className="todo-count">{count}</span>;
}
