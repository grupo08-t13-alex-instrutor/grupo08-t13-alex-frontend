import styled from "styled-components";

const MainPhotoAdDiv = styled.div`
    width: auto !important;
    max-width: 750px;
    min-width: 300px;
    height: auto;
    padding: 25px 15px;
    margin: 10px !important;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.gray10};

    display: flex;
    justify-content: center;

    > img {
        width: 90%;
        overflow: hidden;
    }

    @media (min-width: 720px) {
        width: 751px;
        height: 213px;
        padding: 36px 44px;
        margin: 10px auto !important;
    }
`;

export default MainPhotoAdDiv;

// export const StyledDescription = styled.div`
//   width: auto !important;
//   max-width: 750px;
//   min-width: 300px;
//   height: auto;
//   padding: 25px 15px;
//   margin: 10px !important;
//   border-radius: 4px;

//   box-sizing: border-box;

//   background-color: ${(props) => props.theme.gray10};

//   h6 {
//     color: ${(props) => props.theme.gray1};
//     margin: 0;
//   }

//   @media (min-width: 720px) {
//     width: 751px;
//     height: 213px;
//     padding: 36px 44px;
//     margin: 10px auto !important;
//   }
// `;
