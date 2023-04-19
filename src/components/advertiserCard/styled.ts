import styled from "styled-components";

const StyledAdvertiserCard = styled.div`

    width: 350px;
    height: 400px;
    border-radius: 4px;

    text-align: center;
    font-style: normal;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;
    gap: 28px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.gray10};


    .userIdent {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-items: center;
        justify-content: center;
    }
    .userReference {
        display: flex;
        flex-direction: column;
        width: 77px;
        height: 77px;
        left: 137px;
        top: 40px;
        align-items: center;
        text-align: center;
        background-color: ${(props) => props.theme.brand1};
        border-radius: 50%;
        padding: none;
        margin-bottom: 20px;
        h2 {
            color: #ffffff;
            text-align: center;
            align-items: center;
            margin: auto 0px;
            font-weight: 100;
        }
    }

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: none;
        gap: 10px;

        width: 206px;
        height: 48px;
        /* background-color: ${(props) => props.theme.grey0}; */
        background-color: #0b0d0d;
        border: 1.5px solid #0b0d0d;
        border-radius: 4px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 0px;
        color: #ffffff;
    }
    @media (min-width: 720px) {
        /* position: absolute; */
        width: 450px;
        height: 425px;
        /* left: 979px;
        top: 531px; */
    }
`;
export default StyledAdvertiserCard;
