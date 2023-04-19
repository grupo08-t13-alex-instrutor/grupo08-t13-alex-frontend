import { AsideHomePage, Cards, FooterHomePage, Header, Banner } from '../../components';
import { Section, Ul } from '../../styled';
import SectionHome from './styled';

export const Homepage = () => {

    return (

        <SectionHome>
            <Header />
            <Banner />
            <Section>
                <AsideHomePage />
                <Ul>
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
                        <span className='cifrao'>$</span>
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
                        <span className='cifrao'>$</span>
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
                       
                    </Cards >
                </Ul>
            </Section >
            <FooterHomePage />
        </SectionHome>
    );
}