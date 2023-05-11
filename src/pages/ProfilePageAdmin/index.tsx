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
  const { setOneAd, getUseInfoData } = useContext(User)

  const navigate = useNavigate();
  const location = useLocation();
  const [adversaments, setAdversaments] = useState<any>([]);
  const [openRegisterAdForm, setOpenRegisterAdForm] = useState(false);
  const [openUpateAdForm, setOpenUpateAdForm] = useState(false);
  const [brands, setBrands] = useState<any>(null);
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
    localStorage.setItem(
      "adversamentsPageAdmin",
      JSON.stringify(responseAdversaments.data)
    );

    const adverSamentsSession = JSON.parse(
      localStorage.getItem("adversamentsPageAdmin")!
    );

    setAdversaments(adverSamentsSession);
    getUseInfoData()
  };

  const callBackSiglaNameUtils = async () => {

    if (localStorage.getItem("id")) {

      const resUser = await instanceAxios.get(`user/${localStorage.getItem("id")}`)
      const result = await siglaNameUtils(resUser.data.name)

      sessionStorage.setItem('sigla', result)
      sessionStorage.setItem('name', resUser.data.name)
      sessionStorage.setItem('idAdmin', resUser.data.id)
      sessionStorage.setItem('description', resUser.data.description)
    }
  };
  console.log(adversaments)
  if (location.pathname === "/profile/admin") {
    useEffect(() => {
      callBackSiglaNameUtils();
      getAdversaments();
    }, [location.pathname, localStorage.getItem("token")]);
  }

  useEffect(() => {
    callBackSiglaNameUtils();
    getAdversaments();

    const adverSamentsSession = JSON.parse(
      localStorage.getItem("adversamentsPageAdmin")!
    );
    setAdversaments(adverSamentsSession);
  }, [localStorage.getItem("token")]);

  return (
    <Section className="profile">
      <Header />
      {openRegisterAdForm ? (
        <ModalContainer>
          <RegisterFormAds
            openRegisterAdForm={openRegisterAdForm}
            setOpenRegisterAdForm={setOpenRegisterAdForm}
            adversaments={adversaments}
            setAdversaments={setAdversaments}
            brands={brands}
          />
        </ModalContainer>
      ) : (
        <></>
      )}

      {openUpateAdForm ? (
        <ModalContainer>
          <EditFormAds
            id={adId}
            openUpateAdForm={openUpateAdForm}
            setOpenUpateAdForm={setOpenUpateAdForm}
            adversaments={adversaments}
            setAdversaments={setAdversaments}
            brands={brands}
          />
        </ModalContainer>
      ) : (
        <></>
      )}
      <div className="bg"></div>

      <article className="infoUser">
        <article className="siglaInfoUser">
          {sessionStorage.getItem("sigla")}
        </article>
        <section>
          <span>{sessionStorage.getItem("name")}</span>
          <span className="anunciante">Anuciante</span>
        </section>
        <p>{sessionStorage.getItem("description")}</p>
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
        {adversaments ? adversaments!.map((e: any) => {
          if (e.user.id === sessionStorage.getItem("idAdmin")) {
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
                      setOneAd(e.id)
                    }}
                  >
                    Ver detalhes
                  </button>
                </div>
                {e.published ? <span className="ativo">ativo</span> : <span className="inativo">inativo</span>}
              </Cards>
            );
          }
        }) : null}
      </ul>

      {!adversaments[0] ? <p id="semAds">Sem Anúncios</p> : null}

      <FooterHomePage />
    </Section>
  );
};

export default ProfilePageAdmin;
