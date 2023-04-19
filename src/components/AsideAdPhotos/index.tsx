import { IcardAdData } from "../../interfaces";
import Li, { LiAdsAside } from "./styled";

const AsideAdCards = ({ src }: IcardAdData) => {
    return (
        <LiAdsAside>
            <img src={src} alt="" />
        </LiAdsAside>
    );
};

export default AsideAdCards;
