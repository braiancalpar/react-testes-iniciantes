import { use } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import "./form-todo.style.css";
import { TodoContext } from "../TodoProvider/TodoContext";

const FormToDo = ({ onSubmit }) => {
  const { selectedTodo } = use(TodoContext);

  return (
    <form action={onSubmit} className="form">
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        name="description"
        defaultValue={selectedTodo?.description}
        required
      />
      <Button>Salvar item</Button>
    </form>
  );
};

export default FormToDo;
