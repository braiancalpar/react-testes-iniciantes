import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";

const ToDoGroup = ({ todos, heading }) => {
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
