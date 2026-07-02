import { use } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import Dialog from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import FormToDo from "./components/FormToDo";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import ToDoGroup from "./components/ToDoGroup";
import { TodoContext } from "./components/TodoProvider/TodoContext";

function App() {
  const { todos, upsertTodo, openTodoFormModal, closeTodoFormModal, isModalOpen, isLoading } =
    use(TodoContext);

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>

        <ChecklistsWrapper>
          <ToDoGroup
            heading="Para estudar"
            isLoading={isLoading}
            todos={todos.filter((t) => !t.completed)}
          />
          <ToDoGroup
            heading="Concluído"
            isLoading={isLoading}
            todos={todos.filter((t) => t.completed)}
          />
          <Footer>
            <FabButton onClick={openTodoFormModal}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>

      <Dialog isOpen={isModalOpen} onClose={closeTodoFormModal}>
        <FormToDo onSubmit={upsertTodo} />
      </Dialog>
    </main>
  );
}

export default App;
