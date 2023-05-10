import { useContext, useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MotorsShop from "../../assets/png/MotorsShop.png";
import { User } from "../../context";
import instanceAxios from "../../services";
import { siglaNameUtils } from "../../utils";
import { EditAddress } from "../EditAddress";
import UpdateUserForm from "../UpdateUserForm";
import {
    HeaderStyled,
    MenuDesktopStyled,
    MenuStyled,
    ModalContainer,
} from "./styled";

const Header = () => {
    const navigate = useNavigate();
    const { infoUserLogin, getUseInfoData } = useContext(User);
    const [openMenu, setOpenMenu] = useState(false);
    const [editAddress, setEditAddress] = useState<boolean>(false);
    const [editUser, setEditUser] = useState<boolean>(false);
    const [sigla, setSigla] = useState<string>();
    const [name, setNAme] = useState<string>();

    const callBackSiglaNameUtils = async () => {
        if (localStorage.getItem("id")) {
            const res = await instanceAxios.get(
                `user/${localStorage.getItem("id")}`
            );

            const result = await siglaNameUtils(res.data.name);
            setNAme(res.data.name);
            setSigla(result);
        }
    };

    useEffect(() => {
        callBackSiglaNameUtils();
    }, [infoUserLogin, localStorage.getItem("token")]);

    return (
        <>
            <HeaderStyled>
                <img
                    src={MotorsShop}
                    alt="Logo Motors Shop"
                    onClick={() => navigate("/homepage")}
                />
                <button
                    className="invisible-options"
                    onClick={(event) => {
                        setOpenMenu(!openMenu);
                    }}
                >
                    {openMenu ? <IoClose /> : <IoMenu />}
                </button>
                <div>
                    <hr />
                    {localStorage.getItem("token") ? (
                        <button
                            onClick={(event) => {
                                setOpenMenu(!openMenu);
                            }}
                        >
                            <div>
                                <span className="profile-picture">
                                    <p>{sigla}</p>
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
                                    navigate("/login");
                                }}
                            >
                                Fazer Login
                            </button>
                            <button
                                className="button-big-text register margin"
                                onClick={() => navigate("/register")}
                            >
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
                    {localStorage.getItem("token") ? (
                        <>
                            <button
                                className="atention"
                                onClick={() => {
                                    localStorage.clear();
                                    setOpenMenu(!openMenu);
                                    navigate("/homepage");
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
                                    navigate("/login");
                                }}
                            >
                                Fazer login
                            </button>
                            <button
                                className="button-big-text register"
                                onClick={() => navigate("/register")}
                            >
                                Cadastrar
                            </button>
                        </>
                    )}
                </div>
            </MenuStyled>
            <MenuDesktopStyled
                height={openMenu ? "auto" : "0"}
                padding={openMenu ? "16px 22px" : "0"}
            >
                <button
                    onClick={(event) => {
                        setEditUser(!editUser);
                    }}
                >
                    Editar Perfil
                </button>

                <button
                    onClick={(event) => {
                        setEditAddress(!editAddress);
                    }}
                >
                    Editar Endereço
                </button>
                {!infoUserLogin?.buyer ? (
                    <button onClick={() => navigate("/profile/admin")}>
                        Meus Anúncios
                    </button>
                ) : (
                    ""
                )}
                <button
                    onClick={(event) => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("id");
                        setOpenMenu(!openMenu);
                        navigate("/homepage");
                    }}
                >
                    Sair
                </button>
            </MenuDesktopStyled>
            {editAddress ? (
                <ModalContainer>
                    <EditAddress
                        editAddress={editAddress}
                        setEditAddress={setEditAddress}
                    />
                </ModalContainer>
            ) : null}

            {editUser ? (
                <ModalContainer>
                    <UpdateUserForm
                        editUser={editUser}
                        setEditUser={setEditUser}
                    />
                </ModalContainer>
            ) : null}
        </>
    );
};

export default Header;
