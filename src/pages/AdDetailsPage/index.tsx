import {
    BackgroundBrand1,
    Comment,
    CreationCommentPageProduct,
    FooterHomePage,
    Header,
    TitleAd,
} from "../../components";
import MainPhotoAdComponent from "../../components/AdMainPhoto";
import AsideAdPage from "../../components/AsideAdPage";
import { Description } from "../../components/Description";
import { StyledHome } from "./styled";

const AdDetailsPage = () => {
    return (
        <>
            <Header />
            <BackgroundBrand1 />
            <StyledHome>
                <AsideAdPage />
                <MainPhotoAdComponent />
                <TitleAd />
                <Description />
                <Comment />
                <CreationCommentPageProduct />
            </StyledHome>

            <FooterHomePage />
        </>
    );
};

export default AdDetailsPage;
