import styled from "styled-components";

const MainPhotoAdDiv = styled.div`
    width: auto !important;
    max-width: 750px;
    min-width: 300px;
    padding: 25px 15px;
    margin: 10px !important;
    border-radius: 4px;
    box-sizing: border-box;
    height: 20rem;
    background-color: ${(props) => props.theme.gray10};

    display: flex;
    justify-content: center;

    > img {
        overflow: hidden;
    }

    @media (min-width: 720px) {
        width: 751px;
        height: 20rem;
        padding: 36px 44px;
        margin: 10px auto !important;
    }
`;

export default MainPhotoAdDiv;

