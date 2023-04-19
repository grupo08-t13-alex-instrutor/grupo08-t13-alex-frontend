import styled from "styled-components";

const AsideAdPageStyled = styled.aside`
    height: 85vh;
    float: right;
    display: flex;
    justify-content: center;

    margin: 0.5rem 2rem;

    @media (max-width: 720px) {
        float: under;
        margin: 0.5rem;
    }
`;

export default AsideAdPageStyled;
