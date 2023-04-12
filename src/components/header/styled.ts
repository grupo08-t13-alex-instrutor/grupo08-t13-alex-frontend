import styled from "styled-components";

interface iMenuProps {
    topPosition: string
}

export const HeaderStyled = styled.header`
    width: 100%;
    min-width: 300px;
    padding: 25px 16px;
    border-bottom: 5px solid gray;

    display: flex;
    justify-content: space-between;

    box-sizing: border-box;
    
    button {
        padding: 0;
        border: none;
        background-color: white;

        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    .options {
        z-index: 1;
    }
`;

export const Menu = styled.div<iMenuProps>`
    width: 100%;
    padding: 32px 0;
    gap: 40px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    background: white;
    
    z-index: 1;
    position: absolute;
    top: ${ props => props.topPosition };

    p, hr {
        margin: 0;
    }

    p, button {
        margin: 0 16px;
    }
`;
