import { HeaderStyled, MenuDesktopStyled, MenuStyled, ModalContainer } from "./styled";
import MotorsShop from "../../assets/png/MotorsShop.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { iUser } from "../../interfaces";
import { EditAddress } from "../EditAddress";
import { useContext, useEffect, useState } from "react";
import { User } from "../../context";
import instanceAxios from "../../services";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const [userLogged, setUserLogged] = useState<null | iUser>(null);
    const [editAddress, setEditAddress] = useState<boolean>(false);
    const navigate = useNavigate()
    const { infoUserLogin } = useContext(User)
    const [openMenu, setOpenMenu] = useState(false)
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

    useEffect(() => {
        getAdversaments()
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
                                    <p>{siglaName}</p>
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
                {
                    editAddress ?
                        <ModalContainer>
                            < EditAddress
                                editAddress={editAddress}
                                setEditAddress={setEditAddress}
                            />
                        </ModalContainer >
                        :
                        <></>
                }
                <button>Editar Endereço</button>
                {adversaments.length > 0 ? <button onClick={() => navigate("/profile/admin")}>Meus Anúncios</button> : ""}
                <button onClick={event => {
                    localStorage.removeItem("token")
                    setOpenMenu(openMenu);
                    navigate("/homepage");
                }}>
                    Sair
                </button>
            </MenuDesktopStyled >

        </ >
    )
}

export default Header;
