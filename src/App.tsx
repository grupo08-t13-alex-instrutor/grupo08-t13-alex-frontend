import { ThemeProvider } from 'styled-components';
import { AsideHomePage, Cards, FooterHomePage, Header } from './components';
import GlobalStyle from './globalStyled';
import { RoutesMain } from './routes';
import { Section, Ul } from './styled';
import theme from './themeProvider';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
       <GlobalStyle />
       <RoutesMain/>
        
      </ThemeProvider>
    </>
  );
}

export default App;
