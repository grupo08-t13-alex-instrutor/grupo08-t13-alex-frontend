import styled from "styled-components";



const SectionComment = styled.section`

background-color: ${props => props.theme.gray10};

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
        color: ${props => props.theme.gray2};
    }
}

form{
    width: 30rem;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    height: 10rem;

    border-radius: 4px;

    border-width: 4px;
    border-style: solid;
    border-color:  ${props => props.theme.gray7};

    textarea{
        font-weight: 400;
        font-size: 16px;
        color: ${props => props.theme.gray3};
        resize: none;
        border:none;
        outline: none; 
    }
    	
    div{
        align-items: end;
        button{
            width: 108px;
            height: 38px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 400;
            color: ${props => props.theme.whiteFixed};
            background-color: ${props => props.theme.brand1};
        }
    }
}


div{

    gap: 1rem;
    display: flex;
    padding: 1rem;

    button{
        background-color: ${props => props.theme.gray7};
        color: ${props => props.theme.gray3};
        font-size: 11px;
        border-radius: 24px;
    }
    
    #gosteiMuito{
        width: 5rem;
    }

    #incrivel{
        width: 3rem;
    }

    #recomendarei{
        width: 12rem;
    }
}


`

export default SectionComment