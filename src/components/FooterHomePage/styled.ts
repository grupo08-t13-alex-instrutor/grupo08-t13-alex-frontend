
import styled from "styled-components";

const Footer = styled.footer`

background: ${props => props.theme.gray0};
padding: 1rem;
display: flex;
align-items: center;
width: 100%;
justify-content: space-around;
margin-top: 1.5rem;

@media (max-width: 512px) {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

span{
    color: ${props => props.theme.whiteFixed};
}

div{
    width: 53px;
    height: 50px;
    background: ${props => props.theme.gray1};
    border-radius: 4px;
    color: ${props => props.theme.whiteFixed};
    align-items: center;
    display: flex;
    justify-content: center;
    strong{
        font-size: 1.5rem;
        a{
            color: ${props => props.theme.whiteFixed};
         }
       
    }
}


`

export default Footer