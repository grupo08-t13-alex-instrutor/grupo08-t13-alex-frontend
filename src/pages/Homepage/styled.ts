import styled from "styled-components";


const SectionHome = styled.section`

ul{
    width: 100%;
    height: 49%;
}

position: relative;

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

#formart{
    display: flex;
    align-items: center;
    flex-direction: column;
}

#page{
    display: flex;
    gap: 2rem;

    span{
        cursor: pointer;
            strong{
                color: ${props => props.theme.gray3};
            }
            color: ${props => props.theme.gray5};
    }

    #seguinte,#anterior{
        color: ${props => props.theme.brand1};
        font-weight: 900;
    }
} 

`

export default SectionHome