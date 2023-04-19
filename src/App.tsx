import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyled';
import { RoutesMain } from './routes';
import theme from './themeProvider';

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
