import styled from "styled-components";


const SectionHome = styled.section`

li{
    position: relative;

    .cifrao{
        position: absolute;
        padding: 4px;
        top: 0;
        right: 0;
        color: ${props => props.theme.whiteFixed};
        background: ${props => props.theme.random7};
        border-radius: 4px;
    }
    
    #nameUser:hover{
        text-decoration: underline;
        cursor: pointer;
    }
    

}

`

export default SectionHome