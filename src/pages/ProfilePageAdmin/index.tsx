import Section from "./styled";
import { EditFormAds, FooterHomePage, Header, RegisterFormAds } from "../../components";
import { Cards } from "../../components";
import { useContext, useEffect, useState } from "react";
import { User } from "../../context";
import { useLocation } from "react-router-dom";
import instanceAxios from "../../services";
import { siglaNameUtils } from "../../utils";
import { ModalContainer } from "../../components/Header/styled";

const ProfilePageAdmin = () => {
  const location = useLocation();
  const [adversaments, setAdversaments] = useState([])
  const [openRegisterAdForm, setOpenRegisterAdForm] = useState(false);
  const [sigla, setSigla] = useState<string>()
  const { infoUserLogin } = useContext(User)

  const getAdversaments = async () => {
    const responseAdress = await instanceAxios.get(`ads`);
    setAdversaments(responseAdress.data)
  }

  const callBackSiglaNameUtils = async () => {
    const result = await siglaNameUtils(infoUserLogin!.name)
    setSigla(result)
  }

  if (location.pathname === "/profile/admin") {
    useEffect(() => {
      callBackSiglaNameUtils()
      getAdversaments()
    }, [location.pathname, localStorage.getItem("token")])
  }

  return (
    <Section className="profile">
      <Header />
      { openRegisterAdForm ?
        <ModalContainer>
          <RegisterFormAds 
            openRegisterAdForm={ openRegisterAdForm }
            setOpenRegisterAdForm={ setOpenRegisterAdForm }
            />
        </ModalContainer>
      :
        <></>
      }
      <div className="bg"></div>

      <article className="infoUser">
        <article className="siglaInfoUser">{sigla}</article>
        <section>
          <span>{infoUserLogin?.name}</span>
          <span className="anunciante">Anuciante</span>
        </section>
        <p>
          {infoUserLogin?.description}
        </p>
        <button onClick={ event => {
          event.preventDefault();
          setOpenRegisterAdForm(!openRegisterAdForm);
        }}>Criar anuncio</button>
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
                  siglaNanme={sigla!}
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
