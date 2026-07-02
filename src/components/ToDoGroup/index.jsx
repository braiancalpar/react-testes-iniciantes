import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";

const ToDoGroup = ({ isLoading, todos, heading }) => {
  if (isLoading) {
    return <p style={{ color: "gray" }}>Carregando...</p>;
  }

  if (todos.length === 0) {
    return <p style={{ color: "red" }}>Nenhum item encontrado</p>;
  }
  return (
    <>
      <SubHeading>{heading}</SubHeading>

      <ToDoList>
        {todos.map(function (t) {
          return <ToDoItem key={t.id} item={t} />;
        })}
      </ToDoList>
    </>
  );
};

export default ToDoGroup;
