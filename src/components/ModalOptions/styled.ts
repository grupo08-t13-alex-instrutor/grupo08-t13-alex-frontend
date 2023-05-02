import styled from "styled-components";

interface iProps {
    width: number,
    top: number
}

const ContainerOptions = styled.div<iProps>`
    width: ${ props => `${ props.width }px` };
    height: auto;
    padding: 5px 0 10px 0;
    background-color: red;
    position: fixed;
    z-index: 4;
    border-radius: 0 0 4px 4px;
    top: ${ props => `${ props.top }px`};
    box-sizing: border-box;
    background-color: ${ props => props.theme.gray1 };

    ul {
        width: 100%;
        max-height: 300px;
        overflow-y: auto;
        margin: 0 !important;
        gap: 0;
    }
`;

const ItemOptions = styled.li`    
    width: 100%;
    max-width: none !important;
    position: initial !important;
    padding-bottom: 0 !important;

    p {
        width: 100% !important;
        padding: 5px 10px;
        margin: 0;
        box-sizing: border-box;
        color: ${ props => props.theme.whiteFixed };
        
        :hover {
            color: ${ props => props.theme.gray0 };
            background-color: ${ props => props.theme.gray6 };
            cursor: pointer;
        }
    }
`;

export { ContainerOptions, ItemOptions };