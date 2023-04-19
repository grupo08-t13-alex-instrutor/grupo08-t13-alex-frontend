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
import { StyledAdPage } from "./styled";

const AdDetailsPage = () => {
    return (
        <>
            <Header />
            <BackgroundBrand1 />
            <StyledAdPage>
                <AsideAdPage />
                <div>
                    <MainPhotoAdComponent />
                    <TitleAd />
                    <Description />
                    <Comment />
                    <CreationCommentPageProduct />
                </div>
            </StyledAdPage>

            <FooterHomePage />
        </>
    );
};

export default AdDetailsPage;
