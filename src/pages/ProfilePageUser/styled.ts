import styled from "styled-components";

const Section = styled.section`

position: relative;

.bg {
    background: ${props => props.theme.brand1};
    height: 320px;
}

h5{
    width: 80%;
    margin: 4rem;
    margin-top: 7rem;
}

ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    width: 90%;
    margin: 0 auto;
}

li{
    max-width: 278px;
    position: relative;

    .ativo, .inativo{
        font-weight: 500;
        width: 4rem;
        text-align: center;
        position: absolute;
        margin: 0;
        top: 5px;
        left: 15px;
    }

    .ativo{
        background: ${props => props.theme.brand1};
        color: ${(props) => props.theme.whiteFixed};
    }

    .inativo{
        background: ${props => props.theme.gray4};
        color: ${(props) => props.theme.whiteFixed};
    }
}

article {
    gap: 0.5rem;
    align-items: center;
    display: flex;
    margin-bottom: 5px;
    font-family: Inter;
    font-weight: 500;
    
    article {
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
      color: ${(props) => props.theme.whiteFixed};
      border-radius: 100%;
      height: 2rem;
      width: 2rem;
      align-items: center;
      justify-content: center;
    }

    .siglaInfoUser{
        height: 5rem;
        width: 5rem;
        font-size: 2.5rem;
    }

    span {
        color: ${(props) => props.theme.gray1};
    }

    section{
        display: flex;
        gap: 0.5rem;
        .anunciante{
            background: ${props => props.theme.brand4};
            color: ${(props) => props.theme.brand1};
            font-size: 14px;
        }
    }

  }

.infoUser{
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    top: 18%;
    padding: 1rem;
    right: 11.5%;
    position: absolute;

    @media (max-width: 920px) {
        top: 9%;
    }

    @media (max-width: 654px) {
        height: 18%;
    }

    
    (max-width: 512px){
        top: 7%;
    }
    
    (max-width: 446px){
        h5{
            margin: 14rem 2rem 4rem;
        }
    }



    background: ${props => props.theme.whiteFixed};
    p{
        color: ${(props) => props.theme.gray2};
        margin: 0;
    }
}

footer{
    margin-top: 12rem;
}

`

export default Section