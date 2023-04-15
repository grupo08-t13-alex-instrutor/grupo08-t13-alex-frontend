import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyled';
import { RoutesMain } from './routes';
import theme from './themeProvider';
import { AsideHomePage, Cards, CreationCommentPageProduct, FooterHomePage , Header} from './components';
import { Ul, Section } from './styled';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header/>
        <Section>
          <AsideHomePage />
          <Ul>
            <Cards src={"https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"} marca={"Civic"} descricao={"e um carro"} km={"100.000"} name={"Arlindo"} ano={"2023"} preco={"50.000,00"} />
            <Cards src={"https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"} marca={"Civic"} descricao={"e um carro"} km={"100.000"} name={"Arlindo"} ano={"2023"} preco={"50.000,00"} />
            <Cards src={"https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"} marca={"Civic"} descricao={"e um carro"} km={"100.000"} name={"Arlindo"} ano={"2023"} preco={"50.000,00"} />
            <Cards src={"https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"} marca={"Civic"} descricao={"e um carro"} km={"100.000"} name={"Arlindo"} ano={"2023"} preco={"50.000,00"} />
          </Ul>
        </Section>
        <FooterHomePage />
       <RoutesMain/>
      </ThemeProvider>
    </>
  );
}

export default App;
