import styled from "styled-components";

export const ContainerEditAddress = styled.div`
    min-width: 18.75rem;
    max-width: 45rem;
    height: auto;
    padding: 1.25rem;
    margin: 0.625rem;
    border-radius: 0.25rem;
    background-color: ${ props => props.theme.whiteFixed };
`;

export const HeaderEditAddress = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    h6 {
        width: 50%;
        margin: 0;
    }
    button {
        padding: 0;
        margin: 0;
        background-color: transparent;
        svg {
            color: ${ props => props.theme.gray2 };
            font-size: 2rem;
            
            :hover {
                color: ${ props => props.theme.gray0 };
            }
        }
    }
`;

export const FooterEditAddress = styled.div`
    padding: 20px 0;
    justify-content: flex-end !important;
    gap: 10px;

    button:nth-child(1) {
        padding: 10px 20px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: ${ props => props.theme.gray2 };
        
        border: 1.5px solid ${ props => props.theme.gray6 };
        border-radius: 4px;
    }
    button:nth-child(2) {
        min-width: 100px;
        min-height: 38px;
        padding: 10px 20px;
        border-radius: 4px;
        border: 1.5px solid ${ props => props.theme.brand1 };
        background: ${ props => props.theme.brand1 };
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: ${ props => props.theme.whiteFixed };
        :disabled {
        }
    }
    
    @media (min-width: 720px) {
        button:nth-child(1):hover {
            color: ${ props => props.theme.gray1 };
        }
        button:nth-child(2):hover {
            color: ${ props => props.theme.brand1 };
            border-color: ${ props => props.theme.brand1 };
            background-color: ${ props => props.theme.brand4 };
        }
    }
`;

export const AlertEditAddress = styled.p`
    width: 100%;
    height: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: ${ props => props.theme.alert1 };
    box-sizing: border-box;
`;

export const FormEditAddress = styled.form`
    display: flex;
    flex-direction: column;
    label {
        width: 100%;
        padding: 0.625rem 0 0.3125rem 0;
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.0625rem;
        color: ${ props => props.theme.gray1 };
        box-sizing: border-box;
    }
    input {
        width: 100%;
        padding: 0.625rem;
        border: 0.093rem solid ${ props => props.theme.gray7 };
        border-radius: 0.25rem;
        box-sizing: border-box;
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        color: ${ props => props.theme.gray0 };

        :hover {
            border: 0.093rem solid ${ props => props.theme.brand1 };
        }
        
        :focus {
            color: ${ props => props.theme.gray0 };
            border: 0.093rem solid ${ props => props.theme.brand1 };
        }
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        :nth-child(1) {
            margin-right: 0.625rem;
        }
        div {
            width: 50%;
            display: flex;
            flex-direction: column;
        }
    }
`;
