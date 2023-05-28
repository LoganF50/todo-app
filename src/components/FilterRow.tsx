import styled from "styled-components";
import { TodoFilter } from "../App";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base500};
  background-color: ${({ theme }) => theme.color.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.base200};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  padding: ${({ theme }) =>
    `${theme.spacing.base500} ${theme.spacing.base600}`};
`;

const FilterButton = styled.button<FilterButtonProps>`
  background-color: transparent;
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.text.accent : theme.color.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.base200};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;

  &:hover {
    color: ${({ theme }) => theme.color.text.accent};
    cursor: pointer;
  }
`;

type FilterRowProps = {
  onClickActive: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickAll: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickCompleted: (e: React.MouseEvent<HTMLButtonElement>) => void;
  currentFilter: TodoFilter;
};

type FilterButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
};

export const FilterRow: React.FC<FilterRowProps> = ({
  onClickActive,
  onClickAll,
  onClickCompleted,
  currentFilter,
}: FilterRowProps) => {
  return (
    <Wrapper>
      <FilterButton
        onClick={onClickAll}
        isActive={currentFilter === TodoFilter.All}
      >
        All
      </FilterButton>
      <FilterButton
        onClick={onClickActive}
        isActive={currentFilter === TodoFilter.Active}
      >
        Active
      </FilterButton>
      <FilterButton
        onClick={onClickCompleted}
        isActive={currentFilter === TodoFilter.Completed}
      >
        Completed
      </FilterButton>
    </Wrapper>
  );
};
