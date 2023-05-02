import styled from "styled-components";

const ContainerRegisterFormAd = styled.div`
    min-width: 300px;
    max-width: 500px;
    height: 90%;
    margin: 0 10px;
    gap: 0.5rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.whiteFixed};
    box-sizing: border-box;

    @media (min-width: 720px) {
        margin: auto;
    }
`

const HeaderRegisterFormAd = styled.div`
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0 3px 20px ${ props => props.theme.gray4 };
`

const FormRegisterFormAd = styled.form`
    padding: 0 1rem 1rem 1rem;
    overflow-y: auto;
    
    input{
        width: 100%;
        padding: 0.5rem;
        margin: 0.3rem 0 0.7rem 0;
        border: 2px solid ${props => props.theme.gray4};
        border-radius: 4px;
        font-size: 14.5px;
        box-sizing: border-box;

        :disabled {
            color: ${props => props.theme.gray0};

            :hover {
                border: 2px solid ${ props => props.theme.gray4 };
            }
        }
        
        ::placeholder{
            color: ${props => props.theme.gray3};
        }
        
        :hover {
            border: 2px solid ${ props => props.theme.brand1 };
        }

        :focus {
            border-radius: 4px;
            color: ${ props => props.theme.gray0 };
            border: 2px solid ${ props => props.theme.brand1 };
        }

    }

    textarea{
        font-size: 14.5px;
        padding: 0.5rem;
        border: 2px solid ${props => props.theme.gray4};
        border-radius: 4px;

        :hover {
            border: 2px solid ${ props => props.theme.brand1 };
        }

        :focus{
            border-radius: 4px;
            color: ${ props => props.theme.gray0 };
            border: 2px solid ${ props => props.theme.brand1 };
        } 
    }

    div{
        justify-content: space-between;
        display:flex;

        fieldset {
            width: 50%;
        }
    }

    .addImageGalery{
        gap: 0.5rem ;

        button{
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            font-size: 14px;
            font-weight: 600;
            background-color: ${props => props.theme.brand4} ;
            color: ${props => props.theme.brand1} ;
            border-radius: 4px;
            box-sizing: border-box;
            
            :hover {
                background-color: ${props => props.theme.brand1} ;
                color: ${props => props.theme.brand4};
            }
        }
    }
    
    .description{
        flex-direction: column;
    }

    .alteration{
        gap: 0.5rem;
        button{
            font-size: 14px;
            font-weight: 600;
            width: 220px;
            height: 40px;
            border-radius: 4px;
            background-color: ${props => props.theme.gray6} ;
            color: ${props => props.theme.gray2} ;

            :nth-child(1):hover {
                background-color: ${props => props.theme.gray2} ;
                color: ${props => props.theme.gray6} ;
            }
        }

        .save{
            background-color: ${props => props.theme.brand1};
            color: ${props => props.theme.brand4};
            border: 2px solid ${props => props.theme.brand1};
            
            :hover {
                background-color: ${props => props.theme.brand4};
                color: ${props => props.theme.brand1};
            }
        }
    }

    img{
        cursor: pointer;
    }

    .addImageGalery{
        flex-direction: column;
    }
`

export { 
    HeaderRegisterFormAd, 
    FormRegisterFormAd, 
    ContainerRegisterFormAd 
}