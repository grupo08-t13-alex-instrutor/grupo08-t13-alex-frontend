import Section from "./styled";
import { FooterHomePage, Header } from "../../components";
import { Cards } from "../../components";
import Modal from "../../components/Modal";
import Form from "../../components/Form";

const car = {
  marca: "Civic",
  descrica: "e um carro",
  km: "100.000",
  name: "Arlindo",
  ano: "2023",
  preco: "50.000,00",
};

const ProfilePageAdmin = () => {
  return (
    <Section className="profile">
      <Header />

      <div className="bg"></div>

      <article className="infoUser">
        <article className="siglaInfoUser">SL</article>
        <section>
          <span>Samuel Leão</span>
          <span className="anunciante">Anuciante</span>
        </section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          aliquid facere. Maiores reprehenderit cum atque rem nisi quo et,
          laboriosam vero quisquam? Quibusdam incidunt commodi quas repellendus
          velit fugiat accusantium?
        </p>
        <button>Criar anuncio</button>
      </article>
      <h5>Anúncios</h5>
      <ul>
        <Cards
          src={
            "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
          }
          marca={"Civic"}
          descricao={"e um carro"}
          km={"100.000"}
          name={"Samuel Leão"}
          ano={"2023"}
          preco={"50.000,00"}
        >
          <div className="btnAdmin">
            <button>Editar</button>
            <button>Ver detalhes</button>
          </div>
        </Cards>
        <Cards
          src={
            "https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7"
          }
          marca={"Civic"}
          descricao={"e um carro"}
          km={"100.000"}
          name={"Samuel Leão"}
          ano={"2023"}
          preco={"50.000,00"}
        >
          <div className="btnAdmin">
            <button>Editar</button>
            <button>Ver detalhes</button>
          </div>
        </Cards>
      </ul>

      <FooterHomePage />
    </Section>
  );
};

export default ProfilePageAdmin;
