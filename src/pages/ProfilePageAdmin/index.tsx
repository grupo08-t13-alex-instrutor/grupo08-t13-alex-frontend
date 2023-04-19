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
      <Modal teste={"sds"}>
        <Form>
          <div className="form-inputs">
            <span className="text-body-2-500">Informações pessoais</span>

            <label htmlFor="name">Nome</label>
            <input name="name" type="text" placeholder="Ex: Fulano Silva" />

            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Ex: fulano@email.com"
            />

            <label htmlFor="cpf">Cpf</label>
            <input name="cpf" type="text" placeholder="000.000.000-00" />

            <label htmlFor="telephone">Celular</label>
            <input
              name="telephone"
              type="text"
              placeholder="(DDD) 90000-0000"
            />

            <label htmlFor="birth">Data de nascimento</label>
            <input name="birth" type="text" placeholder="00/00/00" />

            <label htmlFor="description">Descrição</label>
            <textarea
              name="description"
              placeholder="Digitar descrição"
              maxLength={300}
            />
          </div>
          <div className="form-footer">
            <button
              className="cancel"
              onClick={(el) => {
                el.preventDefault;
                const modal = document.querySelector(".modal");
                modal?.classList.toggle("");
              }}
            >
              Cancelar
            </button>
            <button className="submit">Salvar alteracões</button>
          </div>
        </Form>
      </Modal>
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
