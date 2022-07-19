import { EmptyTodo, ToDo } from "../../components";

import styled from "styled-components";
import { useAppSelector } from "../../hooks/reduxHooks";

const Wrapper = styled.div`
  ul {
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Home = () => {
  const { todos } = useAppSelector((state) => state.todo);

  if (todos.length === 0) {
    return <EmptyTodo />;
  }

  return (
    <Wrapper>
      <ul>
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            createdAt={todo.createdAt}
          />
        ))}
      </ul>
    </Wrapper>
  );
};
