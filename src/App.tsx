import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { ChangeEvent, MouseEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { Checkbox } from "./components/Checkbox";
import { AddTodo } from "./components/AddTodo";
import { Todo } from "./components/Todo";
import { TodoSection } from "./components/TodoSection";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background.app};
  background-image: ${({ theme }) => `url(${theme.images.background.mobile})`};
  background-repeat: no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  padding: ${({ theme }) => `0 ${theme.spacing.base700}`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 1200px;
  }
`;

type TodoItem = {
  id: string;
  description: string;
  isCompleted: boolean;
};

const exampleTodos: TodoItem[] = [
  {
    id: uuidv4(),
    description: "Complete online JavaScript course",
    isCompleted: true,
  },
  { id: uuidv4(), description: "Jog around the park 3x", isCompleted: false },
  { id: uuidv4(), description: "10 minutes meditation", isCompleted: false },
  { id: uuidv4(), description: "Read for 1 hour", isCompleted: false },
  { id: uuidv4(), description: "Pick up groceries", isCompleted: false },
  {
    id: uuidv4(),
    description: "Complete Todo App on Frontend Mentor",
    isCompleted: false,
  },
];

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.dark);
  const [todos, setTodos] = useState(exampleTodos);
  const [newTodo, setNewTodo] = useState("");

  const toggleTheme = () => {
    currentTheme.name === "dark"
      ? setCurrentTheme(Themes.light)
      : setCurrentTheme(Themes.dark);
  };

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  // TODO
  const todoCheckHandler = () => {};

  // TODO
  const todoDeleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Wrapper>
          <StyledApp>
            <Header
              toggleTheme={toggleTheme}
              toggleImageSrc={currentTheme.images.toggle}
            />
            <AddTodo
              onChange={handleNewTodoChange}
              placeholder={"Create a new todo..."}
              value={newTodo}
            />
            <TodoSection>
              {todos.map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    onComplete={todoCheckHandler}
                    onDelete={todoDeleteHandler}
                    isChecked={todo.isCompleted}
                    text={todo.description}
                  />
                );
              })}
            </TodoSection>
          </StyledApp>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
