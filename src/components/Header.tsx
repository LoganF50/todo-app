import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.color.text.header};
    font-size: ${({ theme }) => theme.fontSize.base600};
    letter-spacing: ${({ theme }) => theme.spacing.base300};
    text-transform: uppercase;
  }

  button {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    height: ${({ theme }) => theme.fontSize.base500};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }
`;

type HeaderProps = {
  toggleTheme: () => void;
  toggleImageSrc: string;
};

export const Header: React.FC<HeaderProps> = ({
  toggleImageSrc,
  toggleTheme,
}: HeaderProps) => {
  return (
    <StyledHeader>
      <h1>todo</h1>
      <button onClick={toggleTheme}>
        <img src={toggleImageSrc} alt="" />
      </button>
    </StyledHeader>
  );
};
