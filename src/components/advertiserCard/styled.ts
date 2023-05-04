import styled from "styled-components";

const StyledAdvertiserCard = styled.div`
top: 1599px;
left: 12px;
width: 351px;
height: 398px;
border-radius: 4px;
text-align: center;
font-style: normal;

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 28px;
        gap: 28px;
        border-radius: 4px;
        background-color: ${(props) => {
        const colorsRandom = [
            props.theme.random1,
            props.theme.random2,
            props.theme.random3,
            props.theme.random4,
            props.theme.random5,
            props.theme.random6,
            props.theme.random7,
            props.theme.random8,
            props.theme.random9,
            props.theme.random10,
            props.theme.random11,
            props.theme.random12,
        ];

        const randomColorIndex = Math.floor(Math.random() * 12);

        const color = colorsRandom[randomColorIndex];

        return color;
    }};

        position: absolute;
        width: 351px;
        height: 398px;
        left: 12px;
        top: 100px;
        text-align: center;
    }
    .userIdent{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-items:center;
        justify-content: center;

    }
    .userReference{
            display: flex;
            flex-direction:column;
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
        h2{
            color: #FFFFFF;
            text-align: center;
            align-items:center;
            margin: auto 0px;
            font-weight: 100;
        }    

    }

    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: none;
        gap: 10px;

        width: 206px;
        height: 48px;
        background-color: #0B0D0D ;
        border: 1.5px solid #0B0D0D;
        border-radius: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 0px;
        color: #FFFFFF;

    }
    @media (min-width: 720px) {
        position: absolute;
        width: 440px;
        height: 426px;
        left: 979px;
        top: 531px;

    }

`
export default StyledAdvertiserCard