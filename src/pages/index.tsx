import { AsideHomePage, Cards, FooterHomePage, Header } from "../components";
import { Banner } from "../components/Banner";
import { Section, Ul } from "../styled";

export const Homepage = () => {
  return (
    <>
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
    </>
  );
};
