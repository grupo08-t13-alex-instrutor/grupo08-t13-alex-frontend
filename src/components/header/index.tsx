import { HeaderStyled, Menu } from "./styled";
import { useState } from "react";
import MotorsShop from "../../assets/MotorsShop.png";
import { IoMenu, IoClose } from "react-icons/io5";

interface iUser {
    name: string,
    description: string
}

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [userLogged, setUserLogged] = useState<null | iUser>(null);

    let user: iUser = {
        name: "Samuel Leão",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
    }

    const { name, description } = user;
        
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
                                setUserLogged(null);
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
            <Menu topPosition={ openMenu ? "none" : "-400px" }>
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
                                    Logout
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
            </Menu>
        </>
    )
}
