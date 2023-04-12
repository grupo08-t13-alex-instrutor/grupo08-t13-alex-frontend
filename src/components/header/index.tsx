import { HeaderStyled, Menu } from "./styled";
import { useState } from "react";
import MotorsShop from "../../assets/MotorsShop.png";
import { IoMenu, IoClose } from "react-icons/io5";

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
        
    return(
        <>
            <HeaderStyled>
                <img src={MotorsShop} alt="Logo Motors Shop"/>
                <button onClick={( event ) => {
                    event.preventDefault();
                    setOpenMenu(!openMenu);
                }}>
                    { openMenu ? <IoClose/> : <IoMenu/> }
                </button>
            </HeaderStyled>
            <Menu topPosition={ openMenu ? "none" : "-400px" }>
                <p>Carros</p>
                <p>Motos</p>
                <p>Leilão</p>
                <hr />
                <button>Fazer login</button>
                <button>Cadastrar</button>
            </Menu>
        </>
    )
}
