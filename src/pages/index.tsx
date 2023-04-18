import { AsideHomePage, Cards, FooterHomePage, Header } from "../components";
import { Banner } from "../components";
import { Section, Ul } from "../styled";
import { StyledHome } from "./styled";

export const Homepage = () => {
  return (
    <StyledHome>
      <Header />
      <Banner />
      <Section>
        {window.screen.width > 450 ? <AsideHomePage /> : null}
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
    </StyledHome>
  );
};
