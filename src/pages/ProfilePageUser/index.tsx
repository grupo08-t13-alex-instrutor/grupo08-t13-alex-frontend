import Section from "./styled"
import { FooterHomePage, Header } from "../../components";
import { Cards } from "../../components";
import { Await, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import instanceAxios from "../../services";
import { User } from "../../context";
import { siglaNameUtils } from "../../utils";

const ProfilePageUser = () => {

    const { idUser } = useContext(User)
    const location = useLocation();
    const [adversaments, setAdversaments] = useState([])
    const [sigla, setSigla] = useState<string>()
    const [user, setUser] = useState<any>()

    const userSelectInPageProfileUser = async () => {

        const responsegetUser = await instanceAxios.get(`user/${idUser}`);

        setUser(responsegetUser.data)

        const result = await siglaNameUtils(responsegetUser.data.name)

        setSigla(result)

        sessionStorage.setItem('sigla', result)
        sessionStorage.setItem('id', responsegetUser.data.id)
        sessionStorage.setItem('name', responsegetUser.data.name)
        sessionStorage.setItem('description', responsegetUser.data.description)

    }



    const getAdversaments = async () => {
        const responseAdversaments = await instanceAxios.get(`ads`);
        localStorage.setItem('adversamentsPageUser', JSON.stringify(responseAdversaments.data))
        const adverSamentsSession = JSON.parse(localStorage.getItem('adversamentsPageUser')!)
        setAdversaments(adverSamentsSession)
    }



    useEffect(() => {
        userSelectInPageProfileUser()
        getAdversaments()
        const adverSamentsSession = JSON.parse(localStorage.getItem('adversamentsPageUser')!)
        setAdversaments(adverSamentsSession)
    }, [])

    return (
        <Section className="profile" >
            <Header />
            <div className="bg"></div>

            <article className="infoUser" >
                <article className="siglaInfoUser">{sessionStorage.getItem('sigla')}</article>
                <section>
                    <span>{sessionStorage.getItem('name')}</span>
                    <span className="anunciante">Anuciante</span>
                </section>
                <p>
                    {sessionStorage.getItem('description')}
                </p>
            </article>
            <h5>Anúncios</h5>
            <ul>
                {
                    adversaments.map((e: any) => {
                        if (e.user.id === sessionStorage.getItem('id') && e.published === true) {
                            return (
                                <Cards
                                    src={e.images[0]}
                                    marca={e.brand}
                                    descricao={e.description}
                                    km={e.mileage}
                                    name={user?.name}
                                    ano={e.year}
                                    preco={e.price}
                                    siglaNanme={sigla!}
                                    idAds={e.id}
                                >

                                </Cards>
                            )
                        } else {
                            return null;
                        }
                    })
                }

            </ul>

            <FooterHomePage />
        </Section>

    );
};

export default ProfilePageUser


