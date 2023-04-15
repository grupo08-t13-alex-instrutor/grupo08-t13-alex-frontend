import { HeaderStyled, MenuDesktopStyled, MenuStyled } from "./styled";
import MotorsShop from "../../assets/MotorsShop.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { iUser } from "../../interfaces";
import { useState } from "react";


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [userLogged, setUserLogged] = useState<null | iUser>(null);
    const [mobile, setMobile] = useState(false);

    let user: iUser = {
        name: "Samuel Leão",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        advertisement: [
            { name: "car" }
        ]
    }

    const { name, description, advertisement } = user;
        
    return(
        <>
            <HeaderStyled>
                <img src={MotorsShop} alt="Logo Motors Shop"/>
                <button className="invisible-options" onClick={( event ) => {
                    event.preventDefault();
                    setOpenMenu(!openMenu);
                }}>
                    { openMenu ? <IoClose/> : <IoMenu/> }
                </button>
                <div>
                    <hr />
                    { userLogged ?
                            <button onClick={ event => {
                                event.preventDefault();
                                setOpenMenu(!openMenu);
                            }}>
                                <div>
                                    <span className="profile-picture">
                                        <p>SL</p>
                                    </span>
                                    <p>{name}</p>
                                </div>
                            </button>
                        :
                            <>
                                <button className="body-1-600 margin" onClick={ event => {
                                    event.preventDefault();
                                    setUserLogged(user);
                                }}>
                                    Fazer Login
                                </button>
                                <button className="button-big-text register margin">Cadastrar</button>
                            </>
                    }
                </div>
            </HeaderStyled>
            <MenuStyled topPosition={ openMenu ? "none" : "-400px" }>
                <div className={ openMenu ? "input" : "" }>
                    <button className="body-1-600">Carros</button>
                    <button className="body-1-600">Motos</button>
                    <button className="body-1-600">Leilão</button>
                    <hr />
                    { userLogged ? 
                            <>
                                <button className="atention" onClick={ event => {
                                    event.preventDefault();
                                    setUserLogged(null);
                                }}>
                                    Sair
                                </button>
                            </>
                        :
                            <>
                                <button className="body-1-600" onClick={
                                    event => {
                                        event.preventDefault();
                                        setUserLogged(user);
                                    }
                                }>Fazer login</button>
                                <button className="button-big-text register">Cadastrar</button>
                            </>
                    }
                </div>
            </MenuStyled >
            <MenuDesktopStyled height={ openMenu ? "auto" : "0" } padding={ openMenu ? "16px 22px" : "0" }>
                <button>Editar Perfil</button>
                <button>Editar Endereço</button>
                { advertisement.length > 0 ? <button>Meus Anúncios</button> : "" }
                <button onClick={ event => {
                    event.preventDefault();
                    setUserLogged(null);
                    setOpenMenu(!openMenu);
                }}>
                    Sair
                </button>
            </MenuDesktopStyled>
        </>
    )
}

export default Header