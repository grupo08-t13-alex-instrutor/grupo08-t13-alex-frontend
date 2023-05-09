import styled from "styled-components";
import theme from "../../themeProvider";

export const Section = styled.section`
    min-width: 300px;
    max-width: 750px;
    width: auto !important;
    padding: 25px 15px;
    margin: 10px !important;
    border-radius: 4px;
    background: #FDFDFD;
    box-sizing: border-box;

    #modal{
        left: 0;
    }

    form{

        div{
            display: flex;
            justify-content: space-between;
            img{
                cursor: pointer;
            }
        }

        input{
            border-radius: 4px;
            border: 1.5px solid #e9ecef;
            padding: 0px 16px;
            height: 36px;
            outline: none;
            color: ${(props) => props.theme.gray3};
            font-weight: 400;
            font-size: 1rem;
    
            :focus {
              border: 1.5px solid #5126ea;
            }
        }

        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: white;
        padding: 1rem;
    }

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
            list-style-type: disc;
            font-style: normal;
            font-weight: 400;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            font-size: 12px;
            display: flex;
            padding-left: 0.8rem;
            line-height: 24px;
            color: rgb(134, 142, 150);
            text-align: start;
            position: relative;

                strong{
                   position: absolute;
                    top: -0.5rem;
                    left: 0;
                    font-size: 2rem;
                }
        }
    
    }

   

    p{
        display: flex;
        gap: 1rem;
        
            .removeComment,.edit{
                cursor: pointer;
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