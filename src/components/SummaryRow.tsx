import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.primary};
  padding: ${({ theme }) =>
    `${theme.spacing.base500} ${theme.spacing.base600}`};

  p {
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: ${({ theme }) => theme.fontSize.base100};
  }

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: ${({ theme }) => theme.fontSize.base100};
    border: none;

    &:hover {
      color: ${({ theme }) => theme.color.text.primary};
      cursor: pointer;
    }
  }
`;

type SummaryRowProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  itemCount: number;
};

export const SummaryRow: React.FC<SummaryRowProps> = ({
  onClick,
  itemCount,
}: SummaryRowProps) => {
  return (
    <Wrapper>
      <p>{`${itemCount} ${itemCount === 1 ? "item" : "items"} left`}</p>
      <button onClick={onClick}>Clear Completed</button>
    </Wrapper>
  );
};
