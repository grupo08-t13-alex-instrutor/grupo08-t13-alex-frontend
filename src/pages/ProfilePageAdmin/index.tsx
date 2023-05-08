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
import { useLocation, useNavigate } from "react-router-dom";
import instanceAxios from "../../services";
import { siglaNameUtils } from "../../utils";
import { ModalContainer } from "../../components/Header/styled";
import axios from "axios";

const ProfilePageAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [adversaments, setAdversaments] = useState([]);
  const [openRegisterAdForm, setOpenRegisterAdForm] = useState(false);
  const [openUpateAdForm, setOpenUpateAdForm] = useState(false);
  const [sigla, setSigla] = useState<string>();
  const [brands, setBrands] = useState<string[] | null>(null);
  const { infoUserLogin } = useContext(User);
  const [adId, setAdId] = useState("");

  const getBrands = async () => {
    const { data } = await axios.get("https://kenzie-kars.herokuapp.com/cars");
    let res: string[] = [];
    for (const key in data) {
      res.push(key);
    }

    setBrands(res);
  };

  const getAdversaments = async () => {
    const responseAdversaments = await instanceAxios.get(`ads`);
    localStorage.setItem('adversamentsPageAdmin', JSON.stringify(responseAdversaments.data))

    const adverSamentsSession = JSON.parse(localStorage.getItem('adversamentsPageAdmin')!)
    setAdversaments(responseAdversaments.data);
  };


  const callBackSiglaNameUtils = async () => {

    const result = await siglaNameUtils(infoUserLogin!.name)

    const resUser = await instanceAxios.get(`user/${infoUserLogin!.id}`)

    sessionStorage.setItem('sigla', result)
    sessionStorage.setItem('name', resUser.data.name)
    sessionStorage.setItem('idAdmin', resUser.data.id)
    sessionStorage.setItem('description', resUser.data.description)

    setSigla(result);
  };

  if (location.pathname === "/profile/admin") {
    useEffect(() => {
      callBackSiglaNameUtils();
      getAdversaments();
    }, [location.pathname, localStorage.getItem("token")]);
  }

  useEffect(() => {
    callBackSiglaNameUtils()
    getAdversaments()

    const adverSamentsSession = JSON.parse(localStorage.getItem('adversamentsPageAdmin')!)
    setAdversaments(adverSamentsSession)
  }, [localStorage.getItem("token")])


  return (
    <Section className="profile">
      <Header />
      {openRegisterAdForm ? (
        <ModalContainer>
          <RegisterFormAds
            openRegisterAdForm={openRegisterAdForm}
            setOpenRegisterAdForm={setOpenRegisterAdForm}
            brands={brands}
          />
        </ModalContainer>
      ) : (
        <></>
      )}

      {openUpateAdForm ? (
        <ModalContainer>
          <EditFormAds id={adId} setOpenUpateAdForm={setOpenUpateAdForm} />
        </ModalContainer>
      ) : (
        <></>
      )}
      <div className="bg"></div>

      <article className="infoUser">
        <article className="siglaInfoUser">{sessionStorage.getItem('sigla')}</article>
        <section>
          <span>{sessionStorage.getItem('name')}</span>
          <span className="anunciante">Anuciante</span>
        </section>
        <p>
          {sessionStorage.getItem('description')}
        </p>
        <button onClick={event => {
          event.preventDefault();
          getBrands();
          setOpenRegisterAdForm(!openRegisterAdForm);
        }}>Criar anuncio</button>
      </article >
      <h5>Anúncios</h5>
      <article>
        {
          adversaments!.map((e: any) => {
            if (e.user.id === sessionStorage.getItem('idAdmin')) {
              return (
                <Cards
                  src={e.images[0]}
                  marca={e.brand}
                  descricao={e.description}
                  km={e.mileage}
                  name={sessionStorage.getItem('name')!}
                  ano={e.year}
                  preco={e.price}
                  siglaNanme={sessionStorage.getItem('sigla')!}
                  idAds={e.id}
                >
                  {e.published ?
                    <span className="ativo">Ativo</span>
                    :
                    <span className="inativo">Inativo</span>
                  }
                  <div className="btnAdmin">
                    <button onClick={() => {
                      setOpenUpateAdForm(true)

                    }}>Editar</button>
                    <button onClick={() => {
                      navigate("/ad")
                    }}>Ver detalhes</button>
                  </div>
                </Cards>
              )
            } else {
              return <p>Sem Anúncios</p>;
            }
          })
        }
        <p>{infoUserLogin?.description}</p>
        <button
          onClick={(event) => {
            event.preventDefault();
            getBrands();
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
                      setAdId(e.id);
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
    </Section >
  );
}

export default ProfilePageAdmin
