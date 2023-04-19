import styled from "styled-components";

const BackgroundBrandDiv = styled.div`
    background-color: ${(props) => props.theme.brand1};
    display: flex;
    position: fixed;
    top: 0;
    z-index: -1;
    justify-content: center;
    align-items: center;
    width: 120%;
    height: 540px;
`;

export default BackgroundBrandDiv;
