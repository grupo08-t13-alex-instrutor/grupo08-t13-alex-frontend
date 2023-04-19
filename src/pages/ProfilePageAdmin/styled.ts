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
    margin-top: 13rem;
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
    padding-bottom: 3rem;

    .btnAdmin{

        position: absolute;
        bottom: 0;

        gap: 0.5rem;

        button{ 
            width: 100ppx;
            height: 38px;        
            border: 1px solid ${props => props.theme.brand1};
            font-weight: 600;
            border: 1px solid ${props => props.theme.gray1};
            font-size: 16px;
            color: ${props => props.theme.gray1};
        }
    }
    
}

button{ 
    background: ${props => props.theme.whiteFixed};
    border: 1px solid ${props => props.theme.gray0};
    border-radius: 4px;
}

article {
    gap: 0.9rem;
    align-items: center;
    display: flex;
    margin-bottom: 5px;
    font-family: Inter;
    font-weight: 500;

    button{ 
        width: 160px;
        height: 48px;
        border: 1px solid ${props => props.theme.brand1};
        font-weight: 600;
        font-size: 16px;
        color: ${props => props.theme.brand1};
    }

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
            padding: 3px;
            border-radius: 4px;
            gap: 1px;
            font-size: 14px;
        }
      
    }

  }

.infoUser{
    flex-direction: column;
    align-items: flex-start;
    width: 76%;
    top: 14%;
    padding: 1rem;
    right: 11.5%;
    position: absolute;

    
    @media (max-width: 920px) {
        top: 9%;
    }

    @media (max-width: 654px) {
        height: 20%;
        top: 6%;
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