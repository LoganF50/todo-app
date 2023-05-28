import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.base200};
  margin: ${({ theme }) => `${theme.spacing.base500} 0`};
  overflow: hidden;
`;

type TodoSectionProps = {
  children: React.ReactNode;
};

export const TodoSection = ({ children }: TodoSectionProps) => {
  return <Wrapper>{children}</Wrapper>;
};
