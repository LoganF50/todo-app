import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { AddTodo } from "./components/AddTodo";
import { FilterRow } from "./components/FilterRow";
import { Todo } from "./components/Todo";
import { TodoSection } from "./components/TodoSection";
import { SummaryRow } from "./components/SummaryRow";

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

const Info = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.base200};
  padding-top: ${({ theme }) => theme.spacing.base900};
  text-align: center;
`;

export enum TodoFilter {
  All,
  Active,
  Completed,
}

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
  const [currentFilter, setCurrentFilter] = useState(TodoFilter.All);

  const getDisplayedTodos = () => {
    let displayedTodos: TodoItem[];

    switch (currentFilter) {
      case TodoFilter.Active:
        displayedTodos = todos.filter((todo) => !todo.isCompleted);
        break;
      case TodoFilter.Completed:
        displayedTodos = todos.filter((todo) => todo.isCompleted);
        break;
      // all
      default:
        displayedTodos = todos;
    }

    return displayedTodos;
  };

  const getIncompleteTodoCount = () => {
    let incompleteTodoCount = 0;

    getDisplayedTodos().forEach((todo) => {
      if (!todo.isCompleted) {
        incompleteTodoCount++;
      }
    });

    return incompleteTodoCount;
  };

  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTodo.length > 0) {
      e.preventDefault();
      const createdTodo: TodoItem = {
        id: uuidv4(),
        description: newTodo,
        isCompleted: false,
      };

      const newTodos = [...todos, createdTodo];

      setNewTodo("");
      setTodos(newTodos);
    }
  };

  const clearCompletedTodos = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);

    setTodos(newTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const handleTodoFilterAll = () => {
    setCurrentFilter(TodoFilter.All);
  };

  const handleTodoFilterActive = () => {
    setCurrentFilter(TodoFilter.Active);
  };

  const handleTodoFilterCompleted = () => {
    setCurrentFilter(TodoFilter.Completed);
  };

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleTodoCheckChange = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  };

  const toggleTheme = () => {
    currentTheme.name === "dark"
      ? setCurrentTheme(Themes.light)
      : setCurrentTheme(Themes.dark);
  };

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
              addTodo={handleAddTodo}
              onChange={handleNewTodoChange}
              placeholder={"Create a new todo..."}
              value={newTodo}
            />
            <TodoSection>
              {getDisplayedTodos().map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    onComplete={handleTodoCheckChange}
                    onDelete={handleDeleteTodo}
                    isChecked={todo.isCompleted}
                    text={todo.description}
                  />
                );
              })}
              <SummaryRow
                onClick={clearCompletedTodos}
                itemCount={getIncompleteTodoCount()}
              />
            </TodoSection>
            <FilterRow
              onClickActive={handleTodoFilterActive}
              onClickAll={handleTodoFilterAll}
              onClickCompleted={handleTodoFilterCompleted}
              currentFilter={currentFilter}
            />
            <Info>Drag and drop to reorder list</Info>
          </StyledApp>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
