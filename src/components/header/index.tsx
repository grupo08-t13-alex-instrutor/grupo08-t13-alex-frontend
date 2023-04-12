import { HeaderStyled } from "./styled";
import MotorsShop from "../../assets/MotorsShop.png";


export const Header = () => {
    const Menu = () => {
        console.log("Open")
    }
    
    return(
        <HeaderStyled>
            <img src={MotorsShop} alt="Logo Motors Shop"/>
            <button onClick={( event ) => {
                event.preventDefault();
                Menu();
            }}>
                Clique aqui
            </button>
        </HeaderStyled>
    )
}
