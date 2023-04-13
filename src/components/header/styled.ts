import styled, { keyframes } from "styled-components";

interface iMenuProps {
    topPosition: string
}

export const HeaderStyled = styled.header`
    width: 100%;
    min-width: 300px;
    padding: 25px 16px;
    border-bottom: 1px solid #ADB5BD;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 2;
    position: relative;
    background-color: white;
    
    button {
        padding: 0;
        border: none;
        background-color: white;
        margin-left: auto;

        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    div {
        visibility: hidden;
        width: 0;
        height: 0;
    }

    @media (min-width: 720px) {
        padding: 0 60px;

        img {
            padding: 26px 0;
        }

        .invisible-options {
            visibility: hidden;
            width: 0;
        }

        .body-1-600 {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 28px;
            color: #495057;
            text-align: start;
        }
        
        .button-big-text {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color: #495057;
        }

        .register {
            color: #0B0D0D;
            padding: 12px 24px;
            border: 1.5px solid #ADB5BD;
            border-radius: 4px;
        }

        div {
            width: auto;
            height: auto;
            max-height: 80px;
            gap: 20px;
            visibility: visible;
            display: inline-flex;
            
            .margin {
                margin: 16px 0;
            }
            
            hr {
                margin: 0;
                color: #DEE2E6;
            }
            
            div {
                gap: 10px;
                display: flex;
                align-items: center;                
            }

            button {
                margin: 0;
            }
            
            button div .profile-picture {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background-color: #5126EA;
                margin: auto 0;
                padding: 0;

                p {
                    height: 32px;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 700;
                    font-size: 14px;
                    color: #ffffff;
                }
            }

            div p {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                color: #495057;
            }
        }
    }
`;


export const Menu = styled.div<iMenuProps>`
    @keyframes input {
        0% {
            transform: translateY( -400px );
        }
        100% {
            transform: translateY( none );
        }
    }

    .input {
	    animation: input 1s normal;
    }

    width: 100%;
    z-index: 1;
    position: absolute;
    top: ${ props => props.topPosition };
    
    div {
        padding: 32px 0;
        gap: 40px;
        box-sizing: border-box;
        background: white;
        display: flex;
        flex-direction: column;
        
        hr {
            margin: 0;
            color: #ADB5BD; 
        }
        
        button {
            margin: 0 16px;
            border: none;
            background-color: white;
        }

        .atention {
            padding: 12px 28px;
            border: 1px solid #FDD8D8;
            border-radius: 4px;
            background-color: #FDD8D8;
            color: #CD2B31;
            font-size: 16px;
            font-weight: 600;
            font-style: normal;
        }

        .body-1-600 {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 28px;
            color: #495057;
            text-align: start;
        }
        
        .button-big-text {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color: #495057;
        }

        .register {
            color: #0B0D0D;
            padding: 24px;
            border: 1.5px solid #ADB5BD;
            border-radius: 4px;
        }
    }

    @media (min-width: 720px) {
        visibility: hidden;
        width: 0;
        height: 0;
    }
`;
