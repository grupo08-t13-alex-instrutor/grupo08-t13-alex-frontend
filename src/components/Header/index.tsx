import { HeaderStyled, MenuDesktopStyled, MenuStyled } from "./styled";
import MotorsShop from "../../assets/png/MotorsShop.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { iUser } from "../../interfaces";
import { useState } from "react";
import Modal from "../Modal";
import Form from "../Form";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [userLogged, setUserLogged] = useState<null | iUser>(null);
  const [mobile, setMobile] = useState(false);
  const [eiditProfileIsOpen, setEditProfileIsOpen] = useState(false);

  let user: iUser = {
    name: "Samuel Leão",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    advertisement: [{ name: "car" }],
  };

  const { name, description, advertisement } = user;

  return (
    <>
      <HeaderStyled>
        <img src={MotorsShop} alt="Logo Motors Shop" />
        <button
          className="invisible-options"
          onClick={(event) => {
            event.preventDefault();
            setOpenMenu(!openMenu);
          }}
        >
          {openMenu ? <IoClose /> : <IoMenu />}
        </button>
        <div>
          <hr />
          {userLogged ? (
            <button
              onClick={(event) => {
                event.preventDefault();
                setOpenMenu(!openMenu);
              }}
            >
              <div>
                <span className="profile-picture">
                  <p>SL</p>
                </span>
                <p>{name}</p>
              </div>
            </button>
          ) : (
            <>
              <button
                className="body-1-600 margin"
                id="btnlogin"
                onClick={(event) => {
                  event.preventDefault();
                  setUserLogged(user);
                }}
              >
                Fazer Login
              </button>
              <button className="button-big-text register margin">
                Cadastrar
              </button>
            </>
          )}
        </div>
      </HeaderStyled>
      <MenuStyled topPosition={openMenu ? "none" : "-400px"}>
        <div className={openMenu ? "input" : ""}>
          <button className="body-1-600">Carros</button>
          <button className="body-1-600">Motos</button>
          <button className="body-1-600">Leilão</button>
          <hr />
          {userLogged ? (
            <>
              <button
                className="atention"
                onClick={(event) => {
                  event.preventDefault();
                  setUserLogged(null);
                }}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <button
                className="body-1-600"
                onClick={(event) => {
                  event.preventDefault();
                  setUserLogged(user);
                }}
              >
                Fazer login
              </button>
              <button className="button-big-text register">Cadastrar</button>
            </>
          )}
        </div>
      </MenuStyled>
      <MenuDesktopStyled
        height={openMenu ? "auto" : "0"}
        padding={openMenu ? "16px 22px" : "0"}
      >
        <button onClick={() => setEditProfileIsOpen(true)}>
          Editar Perfil
        </button>
        <button>Editar Endereço</button>
        {advertisement.length > 0 ? <button>Meus Anúncios</button> : ""}
        <button
          onClick={(event) => {
            event.preventDefault();
            setUserLogged(null);
            setOpenMenu(!openMenu);
          }}
        >
          Sair
        </button>
      </MenuDesktopStyled>
      <Modal
        modalIsOpen={eiditProfileIsOpen}
        setModalIsOpen={setEditProfileIsOpen}
      >
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
    </>
  );
};

export default Header;
