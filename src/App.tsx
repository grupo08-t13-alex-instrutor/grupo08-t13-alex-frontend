import GlobalStyle from "./globalStyled";
import { ThemeProvider } from "styled-components";
import theme from "./themeProvider";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RoutesMain />
      </ThemeProvider>
    </>
  );
}

export default App;
