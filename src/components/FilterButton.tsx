import styled from "styled-components";

const Button = styled.button<StyleProps>`
  background-color: transparent;
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.text.accent : theme.color.text.secondary};
  border: none;

  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
    cursor: pointer;
  }
`;

type StyleProps = {
  isActive: boolean;
};

type FilterButtonProps = StyleProps & {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
};

export const FilterButton: React.FC<FilterButtonProps> = ({
  onClick,
  isActive,
  text,
}) => {
  return (
    <Button onClick={onClick} isActive={isActive}>
      {text}
    </Button>
  );
};
