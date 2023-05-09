import styled from "styled-components";

export const ContainerAsidePhotos = styled.div`
    background-color: ${(props) => props.theme.gray10};

    display: flex;
    flex-direction: column-reverse;
    width: 450px;
    height: 400px;
    border-radius: 4px;
    padding: 2rem;

    h5 {
        margin: 1rem 0;
    }

   
`;

export const UlAdAside = styled.ul`
    width: 100%;
    height: 380px;
    gap: 1rem;
    flex-wrap: wrap;
    display: flex;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    overflow: hidden;
    gap: 1rem;
`;

export const LiAdsAside = styled.li`
    width: 108px;
    height: 108px;

    background-color: ${(props) => props.theme.gray7};

    img {
        width: 108px;
        height: 108px;
    }
`;

export default LiAdsAside;
UlAdAside;
ContainerAsidePhotos;
