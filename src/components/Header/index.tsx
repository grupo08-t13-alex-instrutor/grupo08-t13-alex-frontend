import { HeaderStyled, MenuDesktopStyled, MenuStyled, ModalContainer } from "./styled";
import MotorsShop from "../../assets/png/MotorsShop.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { User } from "../../context";
import instanceAxios from "../../services";
import { useNavigate } from "react-router-dom";
import { EditAddress } from "../EditAddress";
import UpdateUserForm from "../UpdateUserForm";
import { siglaNameUtils } from "../../utils";

const Header = () => {
    const navigate = useNavigate()
    const { infoUserLogin } = useContext(User)

    const [openMenu, setOpenMenu] = useState(false)
    const [adversaments, setAdversaments] = useState([])
    const [editAddress, setEditAddress] = useState<boolean>(false);
    const [editUser, seteditUser] = useState<boolean>(true);
    const [sigla, setSigla] = useState<string>()

    const callBackSiglaNameUtils = async () => {
        const result = await siglaNameUtils(infoUserLogin!.name)
        setSigla(result)
    }

    const getAdversaments = async () => {
        const responseAdress = await instanceAxios.get(`ads`);
        setAdversaments(responseAdress.data)
    }

    useEffect(() => {
        getAdversaments()
        callBackSiglaNameUtils()
    }, [localStorage.getItem("token")])

    return (
        <>

            <HeaderStyled>
                <img src={MotorsShop} alt="Logo Motors Shop" onClick={() => navigate("/homepage")} />
                <button className="invisible-options" onClick={(event) => {
                    setOpenMenu(!openMenu);
                }}>
                    {openMenu ? <IoClose /> : <IoMenu />}
                </button>
                <div>
                    <hr />
                    {localStorage.getItem("token") ?
                        <button onClick={event => {
                            setOpenMenu(!openMenu);
                        }}>
                            <div>
                                <span className="profile-picture">
                                    <p>{sigla}</p>
                                </span>
                                <p>{infoUserLogin?.name}</p>
                            </div>
                        </button>
                        :
                        <>
                            <button className="body-1-600 margin" id="btnlogin" onClick={event => {
                                navigate("/login");
                            }}>
                                Fazer Login
                            </button>
                            <button className="button-big-text register margin" onClick={() => navigate("/register")}>Cadastrar</button>
                        </>
                    }
                </div>
            </HeaderStyled>
            <MenuStyled topPosition={openMenu ? "none" : "-400px"}>
                <div className={openMenu ? "input" : ""}>
                    <button className="body-1-600">Carros</button>
                    <button className="body-1-600">Motos</button>
                    <button className="body-1-600">Leilão</button>
                    <hr />
                    {localStorage.getItem("token") ?
                        <>
                            <button className="atention" onClick={() => {
                                localStorage.removeItem("token")
                                setOpenMenu(!openMenu);
                                navigate("/homepage");
                            }}>
                                Sair
                            </button>
                        </>
                        :
                        <>
                            <button className="body-1-600" onClick={
                                event => {
                                    navigate("/login");
                                }
                            }>Fazer login</button>
                            <button className="button-big-text register" onClick={() => navigate("/register")}>Cadastrar</button>
                        </>
                    }
                </div>
            </MenuStyled >
            <MenuDesktopStyled height={openMenu ? "auto" : "0"} padding={openMenu ? "16px 22px" : "0"}>
                <button>Editar Perfil</button>
                <button onClick={event => {
                    setEditAddress(!editAddress)
                }}
                >Editar Endereço</button>
                <button onClick={event => {
                    setEditAddress(!editAddress)
                }}>Editar Endereço</button>
                {adversaments.length > 0 ? <button onClick={() => navigate("/profile/admin")}>Meus Anúncios</button> : ""}
                <button onClick={event => {
                    localStorage.removeItem("token")
                    setOpenMenu(!openMenu);
                    navigate("/homepage");
                }}>
                    Sair
                </button>
            </MenuDesktopStyled >
            {editAddress ?
                <ModalContainer>
                    <EditAddress
                        editAddress={editAddress}
                        setEditAddress={setEditAddress}
                    />
                </ModalContainer>
                :
                null
            }

            {editUser ?
                <ModalContainer>
                    <UpdateUserForm />
                </ModalContainer>
                :
                null
            }
        </>
    )
}

export default Header;
