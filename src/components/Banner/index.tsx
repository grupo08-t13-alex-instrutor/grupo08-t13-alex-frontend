import banner1 from "../../assets/png/banner-image.png";
import { StyledBanner } from "./styled";

const Banner = () => {
  return (
    <StyledBanner>
      <div className="container">
        <div className="bannerText">
          <h3>Motors Shop</h3>
          <h3 className="subtitle">
            A melhor plataforma de anúncios de carros do país
          </h3>
        </div>
        <div className="mask" />
        <img src={banner1} alt="banner-image" />
      </div>
    </StyledBanner>
  );
};


export default Banner