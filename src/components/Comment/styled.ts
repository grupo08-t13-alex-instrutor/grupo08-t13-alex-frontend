import styled from "styled-components";

export const Section = styled.section`
    min-width: 300px;
    max-width: 750px;
    width: auto !important;
    padding: 25px 15px;
    margin: 10px !important;
    border-radius: 4px;
    background: #FDFDFD;
    box-sizing: border-box;

    p {
        width: 100%;
        margin: 0 0 10px 0;
    }

    ul {
        display: flex;
        flex-direction: column;
    }

    .body-2-400 {
        width: 100%;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #495057;
    }

    @media (min-width: 720px) {
        margin: 10px auto !important;
    }
`;

interface iCardComment {
    bgcolor: string
}

export const CardComment = styled.li<iCardComment>`
    margin: 10px 0 !important;

    .headerComment {
        width: 100%;
        padding: 0 0 10px 0;
        margin-left: 0;
        display: flex;
        flex-direction: row;
        align-items: center;

        .img{
            width: 30px;
            height: 30px;
            max-width: 25%;
            border-radius: 50%;
            color: #ffffff;
            background-color: ${ props => props.bgcolor };
            display: flex;
            align-items: center;
            justify-content: center;
        }

        p {
            width: auto;
            margin: 0;
            padding: 0 10px;
        }

        .time {
            width: 25%;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 24px;
            color: #868E96;
            text-align: start;
        }
    }

    .bodyComment {
        margin-left: 0;
        .body-2-400 {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            color: #495057;
        }
    }
`;