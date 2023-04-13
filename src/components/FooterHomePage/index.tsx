import Footer from "./styled"

import MotorsShopFooter from "../../assets/MotorsShopFooter.png";

const FooterHomePage = () => {
    return (
        <Footer>
            <img src={MotorsShopFooter} alt="" />

            <span>@ 2022 todos os direitos reservados</span>

            <div>
                <strong>
                    ^
                </strong>
            </div>

        </Footer>
    )
}

export default FooterHomePage