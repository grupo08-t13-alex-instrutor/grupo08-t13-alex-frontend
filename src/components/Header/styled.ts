import styled from "styled-components";
import { iMenuProps } from "../../interfaces";

export const HeaderStyled = styled.header`
  width: 100%;
  min-width: 300px;
  padding: 25px 16px;
  border-bottom: 1px solid #adb5bd;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 2;
  top: 0;
  position: fixed;
  background-color: white;

  #btnlogin{
    color:${props => props.theme.brand1}
  }
  img{
    cursor: pointer;
  }
  
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
      color: #0b0d0d;
      padding: 12px 24px;
      border: 1.5px solid #adb5bd;
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
        color: #dee2e6;
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
        background-color: #5126ea;
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

          :hover {
            color: #000000;
          }
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

export const MenuStyled = styled.div<iMenuProps>`
  @keyframes input {
    0% {
      transform: translateY(-400px);
    }
    100% {
      transform: translateY(none);
    }
  }

  .input {
    animation: input 1s normal;
  }

  width: 100%;
  z-index: 1;
  position: absolute;
  top: ${(props) => props.topPosition};

  div {
    padding: 32px 0;
    gap: 40px;
    box-sizing: border-box;
    background: white;
    display: flex;
    flex-direction: column;

    hr {
      margin: 0;
      color: #adb5bd;
    }

    button {
      margin: 0 16px;
      border: none;
      background-color: white;
    }

    .atention {
      padding: 12px 28px;
      border: 1px solid #fdd8d8;
      border-radius: 4px;
      background-color: #fdd8d8;
      color: #cd2b31;
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
      color: #0b0d0d;
      padding: 24px;
      border: 1.5px solid #adb5bd;
      border-radius: 4px;
    }
  }

  @media (min-width: 720px) {
    visibility: hidden;
    width: 0;
    height: 0;
  }
`;

interface iMenuDesktopProps {
  height: string;
  padding: string;
}

export const MenuDesktopStyled = styled.div<iMenuDesktopProps>`
  width: 0;
  height: 0;
  visibility: hidden;

  @media (min-width: 720px) {
    width: 200px;
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    gap: 16px;
    border-radius: 4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    background-color: #f8f9fa;

    visibility: visible;

    box-sizing: border-box;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: start;

    position: absolute;
    z-index: 3;
    right: 5px;
    top: 70px;

    button {
      width: 100%;
      background-color: transparent;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #495057;
      text-align: start;

      :hover {
        color: #000000;
      }
    }
  }
`;

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  z-index: 3;
  position: fixed;
  top: 0;
  background-color: rgba( 0, 0, 0, 0.5 );
  display: flex;
  align-items: center;
  justify-content: center;
`;