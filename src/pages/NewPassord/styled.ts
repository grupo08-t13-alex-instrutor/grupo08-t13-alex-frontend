import styled from "styled-components";

const StyledLogin = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 46px 0;
  background-color: ${(props) => props.theme.gray8};

p{
  color: red;
}

form{
  
  .SHOW , .HIDDEN{
    left: 0;
    cursor: pointer;
    font-weight: bolder;
    font-weight: bolder;
    color: ${(props) => props.theme.gray2};
  }
}

  .container {
    width: 50%;
    min-width: 287px;
    max-width: 356px;
    background-color: ${(props) => props.theme.gray10};
    padding: 44px 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .form-inputs {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 8px;
      font-family: Inter;

      label {
        font-size: 0.875rem;
        font-weight: 500;
        color: ${(props) => props.theme.gray1};
      }

      input {
        border-radius: 4px;
        border: 1.5px solid #e9ecef;
        padding: 0px 16px;
        height: 48px;
        outline: none;
        color: ${(props) => props.theme.gray3};
        font-weight: 400;
        font-size: 1rem;

        :focus {
          border: 1.5px solid #5126ea;
        }
      }

      span {
        position: absolute;
        bottom: -30px;
        right: 20px;
      }
    }

    .form-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      width: 100%;
      margin-top: 50px;

      button {
        :hover {
          transform: scale(0.95);
        }
      }

      .resetPass {
        background-color: ${(props) => props.theme.brand1};
        padding: 12px 28px;
        width: 100%;
        border-radius: 4px;
        border: none;
        color: ${(props) => props.theme.whiteFixed};
        font-size: 1rem;
        font-weight: 600;
      }

      .register {
        background-color: transparent;
        padding: 12px 28px;
        width: 100%;
        border-radius: 4px;
        border: 1.5px solid #adb5bd;
        color: ${(props) => props.theme.gray0};
        font-size: 1rem;
        font-weight: 600;
      }
      .login {
        background-color: transparent;
        padding: 12px 28px;
        width: 100%;
        border-radius: 4px;
        border: 1.5px solid blue;
        color: ${(props) => props.theme.brand1};
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }
`;

export default StyledLogin;
