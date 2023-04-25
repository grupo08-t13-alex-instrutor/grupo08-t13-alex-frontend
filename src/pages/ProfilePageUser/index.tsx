import Section from "./styled"
import { FooterHomePage, Header } from "../../components";
import { Cards } from "../../components";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import instanceAxios from "../../services";
import { User } from "../../context";

const ProfilePageUser = () => {

    const { infoUserLogin } = useContext(User)
    const location = useLocation();
    const [adversaments, setAdversaments] = useState([])

    let siglaName = ""
    if (infoUserLogin?.name.includes(" ")) {
        const a = infoUserLogin?.name.split(" ")
        siglaName += a[0][0] + a[1][1]

    } else {
        siglaName += infoUserLogin?.name[0]
    }

    const getAdversaments = async () => {
        const responseAdress = await instanceAxios.get(`ads`);
        setAdversaments(responseAdress.data)
    }

    if (location.pathname === "/profile/user") {
        useEffect(() => {
            getAdversaments()
        }, [location.pathname])
    }

    return (
        <Section className="profile" >
            <Header />
            <div className="bg"></div>

            <article className="infoUser" >
                <article className="siglaInfoUser">{siglaName}</article>
                <section>
                    <span>{infoUserLogin?.name}</span>
                    <span className="anunciante">Anuciante</span>
                </section>
                <p>
                    {infoUserLogin?.description}
                </p>
            </article>
            <h5>Anúncios</h5>
            <ul>
                {
                    adversaments!.map((e: any) => {
                        if (e.user.id === infoUserLogin?.id) {
                            return (
                                <Cards
                                    src={e.images[0]}
                                    marca={e.brand}
                                    descricao={e.description}
                                    km={e.mileage}
                                    name={infoUserLogin!.name}
                                    ano={e.year}
                                    preco={e.price}
                                    siglaNanme={siglaName}
                                >
                                    {e.published ? <p className="ativo">ativo</p> : <p className="inativo">inativo</p>}
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


