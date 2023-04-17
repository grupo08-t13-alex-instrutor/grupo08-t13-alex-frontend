import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyled';
import { RoutesMain } from './routes';
import theme from './themeProvider';
import { RegisterFormAds } from './components';


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
