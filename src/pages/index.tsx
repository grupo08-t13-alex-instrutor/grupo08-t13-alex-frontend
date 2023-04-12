import { AsideHomePage } from "../components";
import { Banner } from "../components/Banner";
import { StyledHome } from "./styled";

export const Home = () => {
  return (
    <>
      <StyledHome>
        <Banner />
        <AsideHomePage />
      </StyledHome>
    </>
  );
};
