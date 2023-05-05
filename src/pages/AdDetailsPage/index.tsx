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
import { ButtonGrey, SectionComment } from "../../components/CreationCommentPageProduct/styled";
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
                    {localStorage.getItem("token") ?

                        <CreationCommentPageProduct />
                        :
                        <SectionComment className="NotcreateComment">
                            <form action="" className="formNotActivate">
                                <textarea placeholder="Digite seu comentário" disabled={true}></textarea>
                                <button>Comentar</button>
                            </form>

                            <div id="btnDiv">
                                <ButtonGrey className="Gosteimuito">Gostei muito!</ButtonGrey>
                                <ButtonGrey className="Incrível">Incrível</ButtonGrey>
                                <ButtonGrey className="Recomendarei">Recomendarei para meus amigos!</ButtonGrey>
                            </div>
                        </SectionComment>
                    }
                </div>
            </StyledAdPage>

            <FooterHomePage />
        </>
    );
};

export default AdDetailsPage;
