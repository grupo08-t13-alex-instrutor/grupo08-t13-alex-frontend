import MotorsShopFooter from "../../assets/png/MotorsShopFooter.png";
import Footer from "./styled"

const FooterHomePage = () => {
    return (
        <Footer>
            <img src={MotorsShopFooter} alt="" />

            <span>@ 2022 todos os direitos reservados</span>

            <div>
                <a href="#">^</a>
            </div>

        </Footer>
    )
}

export default FooterHomePage