import styled from "styled-components";

const AsideAdPageStyled = styled.aside`
    height: 120vh;
    float: right;
    display: flex;
    justify-content: flex-start;    /* align-items: center; */
    flex-direction: column;
    gap: 2rem;

    margin: 0.5rem 2rem;

    @media (max-width: 720px) {
        /* float: under; */
        margin: 0.5rem;
        height: 120vh;
        gap: 1rem;
    }
`;

export default AsideAdPageStyled;
