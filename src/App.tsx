import GlobalStyle from "./globalStyled";
import { ThemeProvider } from "styled-components";
import theme from "./themeProvider";
import { Banner } from "./components/Banner";
import { Home } from "./pages";
import { Ul, Section } from "./styled";
import { AsideHomePage, Cards, Header, FooterHomePage } from "./components";
import { Description } from "./components/Description";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Header />
        <Banner />

        <Section>
          <AsideHomePage />
          <Ul>
            <Cards
              src={
                "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
              }
              marca={"Civic"}
              descricao={"e um carro"}
              km={"100.000"}
              name={"Arlindo"}
              ano={"2023"}
              preco={"50.000,00"}
            />
            <Cards
              src={
                "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
              }
              marca={"Civic"}
              descricao={"e um carro"}
              km={"100.000"}
              name={"Arlindo"}
              ano={"2023"}
              preco={"50.000,00"}
            />
            <Cards
              src={
                "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
              }
              marca={"Civic"}
              descricao={"e um carro"}
              km={"100.000"}
              name={"Arlindo"}
              ano={"2023"}
              preco={"50.000,00"}
            />
            <Cards
              src={
                "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
              }
              marca={"Civic"}
              descricao={"e um carro"}
              km={"100.000"}
              name={"Arlindo"}
              ano={"2023"}
              preco={"50.000,00"}
            />
          </Ul>
        </Section>
        <FooterHomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
