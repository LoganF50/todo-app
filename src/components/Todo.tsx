import styled from "styled-components";
import { Checkbox } from "./Checkbox";

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  background-color: ${({ theme }) => theme.color.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.text.secondary};
  gap: ${({ theme }) => theme.spacing.base400};
  padding: ${({ theme }) =>
    `${theme.spacing.base500} ${theme.spacing.base600}`};

  button {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    height: ${({ theme }) => theme.fontSize.base100};
  }
`;

const TodoText = styled.div`
  background-color: ${({ theme }) => theme.color.background.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.fontSize.base100};
  flex: 1;
`;

type TodoProps = {
  onComplete: () => void;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id: string;
  isChecked: boolean;
  text: string;
};

export const Todo = ({
  onComplete,
  onDelete,
  id,
  isChecked,
  text,
}: TodoProps) => {
  return (
    <Wrapper id={id}>
      <Checkbox
        onChange={onComplete}
        isChecked={isChecked}
        isDisabled={false}
      />
      <TodoText>{text}</TodoText>
      <button onClick={onDelete}>
        <img src="images/icon-cross.svg" alt="delete" />
      </button>
    </Wrapper>
  );
};
