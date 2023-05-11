import styled from "styled-components";


const SectionBgForm = styled.section`

width: 100vw;
height: 100%;
position: relative;
top: 0;
z-index: 10;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: flex-start;
justify-content: center;
overflow-y: auto;

form{
    display: flex;
    flex-direction: column;
    width: 24rem;
    height: 38rem;
    padding: 0.5rem;
    gap: 0.5rem;
    margin-top: 1rem;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    overflow-y: auto;
    background-color: ${props => props.theme.whiteFixed};

    input{
        padding: 0.2rem;
        color: ${props => props.theme.gray0};
        border: 2px solid ${props => props.theme.gray3};
        border-radius: 4px;
        font-size: 14.5px;

        :focus{
            border-radius: 4px;
            border: 2px solid ${props => props.theme.brand2};
        } 

    }

    textarea{
        border: 2px solid ${props => props.theme.gray2};
        border-radius: 4px;
    }

    div{
        justify-content: space-between;
        display:flex;

    }

    .addImageGalery{
        gap: 0.5rem ;
        button{
            background-color: ${props => props.theme.brand4} ;
            color: ${props => props.theme.brand1} ;
            border-radius: 4px;
            height: 38px;
        }
    }
    
    .yesOrNo{
        flex-direction: column;
        div{
            justify-content: space-around;
            gap: 0.5rem;

            button{
                width: 220px;
                height: 40px;
                border-radius: 4px;
            }

        }
    }


    .no{
        background-color: ${props => props.theme.brand1} ;
        color: ${props => props.theme.whiteFixed} ;
    }

    .description{
        flex-direction: column;
    }

    .alteration{
        gap: 0.5rem;
        button{
            background-color: ${props => props.theme.gray6} ;
            color: ${props => props.theme.gray2} ;
            width: 220px;
            height: 40px;
            border-radius: 4px;
        }

        .save{
            background-color: ${props => props.theme.brand3} ;
            color: ${props => props.theme.brand4} ;
        }

    }

    img{
        cursor: pointer;
    } 

    .addImageGalery{
        flex-direction: column;
    }
}
`
export default SectionBgForm