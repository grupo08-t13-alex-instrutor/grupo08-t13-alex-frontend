import styled from 'styled-components';

const Li = styled.li`

min-width: 278px;

.teste { 

    background-color:${props => props.theme.gray7};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 160px;
    
    img {  
        width: 250px;
        height: 152px;
    }

}

section { 

    display: flex;
    flex-direction: column-reverse;

    p{
        color: ${props => props.theme.gray2}
    }

}

div{  

    display: flex;
    justify-content: space-between;

    div{ 
        gap: 10px;
        div{  
            background-color:${props => props.theme.brand4};
            border-radius: 4px;
            color: ${props => props.theme.brand1};
            padding: 2px;
        }
    }

}

article{

    gap: 0.5rem;
    align-items: center;
    display: flex;
    margin-bottom: 5px;

    article{
        background-color: ${props => props.theme.random1};
        color: ${props => props.theme.whiteFixed};
        border-radius: 100%;
        height: 2rem;
        width: 2rem;
        align-items: center;
        justify-content: center;
    }

    span{
        color: ${props => props.theme.gray2}
    }
}

`

export default Li
