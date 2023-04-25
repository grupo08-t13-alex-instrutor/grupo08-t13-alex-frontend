import Section from "./styled";
import { FooterHomePage, Header } from "../../components";
import { Cards } from "../../components";
import Modal from "../../components/Modal";
import UpdateUserForm from "../../components/UpdateUserForm";
import { useContext, useEffect, useState } from "react";
import { User } from "../../context";
import { IAdversamentsGet } from "../../interfaces";
import { useLocation } from "react-router-dom";
import instanceAxios from "../../services";

const ProfilePageAdmin = () => {

  const location = useLocation();
  const [adversaments, setAdversaments] = useState([])

  const { infoUserLogin } = useContext(User)

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


  if (location.pathname === "/profile/admin") {
    useEffect(() => {
      getAdversaments()
    }, [location.pathname])
  }


  return (
    <Section className="profile">
      <Header />
      <div className="bg"></div>

      <article className="infoUser">
        <article className="siglaInfoUser">{siglaName}</article>
        <section>
          <span>{infoUserLogin?.name}</span>
          <span className="anunciante">Anuciante</span>
        </section>
        <p>
          {infoUserLogin?.description}
        </p>
        <button>Criar anuncio</button>
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
                  <div className="btnAdmin">
                    <button>Editar</button>
                    <button>Ver detalhes</button>
                  </div>
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

export default ProfilePageAdmin;
