import { use } from "react";
import { IconPencil, IconTrash } from "../icons";
import { TodoContext } from "../TodoProvider/TodoContext";
import "./todo-item.style.css";

export function ToDoItem({ item }) {
  const { toggleItemCompleted, removeTodo, selectTodoForEdit } = use(TodoContext);

  const styles = ["todo-item"];
  if (item.completed) {
    styles.push("completed");
  }

  return (
    <li className={styles.join(" ")}>
      <p className="date">{new Date(item.createdAt).toLocaleDateString("pt-BR")}</p>
      <div className="details">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
          onClick={() => toggleItemCompleted(item)}
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button className="btn" onClick={() => removeTodo(item)}>
            <IconTrash />
          </button>
          <button className="btn" onClick={() => selectTodoForEdit(item)}>
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
