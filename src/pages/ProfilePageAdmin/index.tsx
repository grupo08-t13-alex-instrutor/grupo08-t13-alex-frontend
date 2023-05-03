import Section from "./styled";
import {
  EditFormAds,
  FooterHomePage,
  Header,
  RegisterFormAds,
} from "../../components";
import { Cards } from "../../components";
import { useContext, useEffect, useState } from "react";
import { User } from "../../context";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import instanceAxios from "../../services";
import { siglaNameUtils } from "../../utils";
import { ModalContainer } from "../../components/Header/styled";

const ProfilePageAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [adversaments, setAdversaments] = useState([]);
  const [openRegisterAdForm, setOpenRegisterAdForm] = useState(true);
  const [openUpateAdForm, setOpenUpateAdForm] = useState(false);
  const [sigla, setSigla] = useState<string>();
  const { infoUserLogin } = useContext(User);

  const getAdversaments = async () => {
    const responseAdversaments = await instanceAxios.get(`ads`);
    setAdversaments(responseAdversaments.data);
  };

  const callBackSiglaNameUtils = async () => {
    const result = await siglaNameUtils(infoUserLogin!.name);
    setSigla(result);
  };

  if (location.pathname === "/profile/admin") {
    useEffect(() => {
      callBackSiglaNameUtils();
      getAdversaments();
    }, [location.pathname, localStorage.getItem("token")]);
  }

  return (
    <Section className="profile">
      <Header />
      {openRegisterAdForm ? (
        <ModalContainer>
          <RegisterFormAds
            openRegisterAdForm={openRegisterAdForm}
            setOpenRegisterAdForm={setOpenRegisterAdForm}
          />
        </ModalContainer>
      ) : (
        <></>
      )}

      {openUpateAdForm ? (
        <ModalContainer>
          <EditFormAds setOpenUpateAdForm={setOpenUpateAdForm} />
        </ModalContainer>
      ) : (
        <></>
      )}
      <div className="bg"></div>

      <article className="infoUser">
        <article className="siglaInfoUser">{sigla}</article>
        <section>
          <span>{infoUserLogin?.name}</span>
          <span className="anunciante">Anuciante</span>
        </section>
        <p>{infoUserLogin?.description}</p>
        <button
          onClick={(event) => {
            event.preventDefault();
            setOpenRegisterAdForm(!openRegisterAdForm);
          }}
        >
          Criar anuncio
        </button>
      </article>
      <h5>Anúncios</h5>
      <ul>
        {adversaments!.map((e: any) => {
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
                idAds={e.id}
              >
                <div className="btnAdmin">
                  <button
                    onClick={() => {
                      setOpenUpateAdForm(true);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => {
                      navigate("/ad");
                    }}
                  >
                    Ver detalhes
                  </button>
                </div>
              </Cards>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <FooterHomePage />
    </Section>
  );
};

export default ProfilePageAdmin;
