import styled from "styled-components";

const StyledRegister = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.gray8};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 62px;
  padding: 46px 0;
  min-width: 350px;
  



p{
  color: red;
  margin: 0;
  margin-bottom: 1rem;
}
  .register-form {
    width: 50%;
    height: auto;
    min-width: 264px;
    max-width: 411px;
    background-color: ${(props) => props.theme.gray10};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 44px 48px;
    position: relative;


    .SHOW , .HIDDEN{
      position: absolute;
      bottom: 6rem;
      cursor: pointer;
      font-weight: bolder;
      color: ${(props) => props.theme.gray2};
    }

    .form-inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 18px;

      button {
        padding: 12px 20px;
        border: none;
        font-family: Inter;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 4px;

        :hover {
          transform: scale(0.95);
        }
      }

      label {
        font-size: 0.875rem;
        font-weight: 500;
        color: ${(props) => props.theme.gray1};
        margin-bottom: -10px;
      }

      input,
      textarea {
        width: calc(100% - 32px);
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

      textarea {
        border-radius: 4px;
        padding: 24px 16px;
        font-family: Inter;
      }

      .account-type {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 18px;

        .buyer {
          background-color: ${(props) => props.theme.brand1};
          color: ${(props) => props.theme.whiteFixed};
        }

        .avertiser {
          border: 1px solid ${(props) => props.theme.gray4};
          background-color: transparent;
          color: ${(props) => props.theme.gray0};
        }
      }

      .container-2-columns {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .column {
          width: 48%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 20px;

          input {
            text-align: center;
          }

          button {
            width: 100%;
          }
        }
      }

      .submit {
        padding: 12px 28px;
        width: 100%;
        background-color: ${(props) => props.theme.brand1};
        color: ${(props) => props.theme.whiteFixed};
      }
    }
  }
`;

export default StyledRegister;
