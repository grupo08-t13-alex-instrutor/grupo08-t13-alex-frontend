import Section from "./styled"
import { FooterHomePage, Header } from "../../components";
import { Cards } from "../../components";

const car = {
    marca: 'Civic',
    descrica: 'e um carro',
    km: '100.000',
    name: 'Arlindo',
    ano: '2023',
    preco: '50.000,00',
}

const ProfilePageUser = () => {

    return (
        <Section className="profile" >
            <Header />
            <div className="bg"></div>

            <article className="infoUser" >
                <article className="siglaInfoUser">SL</article>
                <section>
                    <span>Samuel Leão</span>
                    <span className="anunciante">Anuciante</span>
                </section>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Voluptate, aliquid facere. Maiores reprehenderit
                    cum atque rem nisi quo et, laboriosam vero quisquam?
                    Quibusdam incidunt commodi quas repellendus velit fugiat accusantium?
                </p>
            </article>
            <h5>Anúncios</h5>
            <ul>
                <Cards
                    src={
                        'https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7'
                    }
                    marca={'Civic'}
                    descricao={'e um carro'}
                    km={'100.000'}
                    name={'Samuel Leão'}
                    ano={'2023'}
                    preco={'50.000,00'}
                >
                    <p className="inativo">inativo</p>
                </Cards >
                <Cards
                    src={
                        'https://th.bing.com/th/id/OIP.WqbR7g86tUvTYeXVQFbqkAHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7'
                    }
                    marca={'Civic'}
                    descricao={'e um carro'}
                    km={'100.000'}
                    name={'Samuel Leão'}
                    ano={'2023'}
                    preco={'50.000,00'}
                >
                    <p className="ativo">ativo</p>
                </Cards>

            </ul>

            <FooterHomePage />
        </Section>

    );
};

export default ProfilePageUser


