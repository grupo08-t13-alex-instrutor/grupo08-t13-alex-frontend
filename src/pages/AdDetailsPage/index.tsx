import { Comment, CreationCommentPageProduct, FooterHomePage, Header, TitleAd } from '../../components';
import { Description } from '../../components/Description';
import { ImageVehicleModal } from '../../components/ImageVehicleModal';
import StyledHome from './styled';

const AdDetailsPage = () => {
    return (
        <>
            <Header />
            <StyledHome>
                <TitleAd />
                <Description />
                <Comment />
                <CreationCommentPageProduct />
            </StyledHome>

            <FooterHomePage />
        </>
    );
};

export default AdDetailsPage