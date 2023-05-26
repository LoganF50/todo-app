import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { useState } from "react";
import { Header } from "./components/Header";

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
  padding: ${({ theme }) =>
    `${theme.spacing.base1000} ${theme.spacing.base700}`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 1200px;
  }
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.dark);

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
          </StyledApp>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
