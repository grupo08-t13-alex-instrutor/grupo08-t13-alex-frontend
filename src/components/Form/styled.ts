import styled from "styled-components";

const StyledForm = styled.form`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 37px;

  .form-title {
    margin: 0;
  }

  button {
    padding: 12px 20px;
    border: none;
    font-family: Inter;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 4px;
    padding: 12px 28px;

    :hover {
      transform: scale(0.95);
    }
  }

  .cancel {
    width: 40%;
    max-width: 126px;
    background-color: ${(props) => props.theme.gray6};
  }

  .submit {
    width: 60%;
    max-width: 193px;
    background-color: ${(props) => props.theme.brand1};
    color: ${(props) => props.theme.whiteFixed};
  }

  .form-header {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    .close {
    }
  }

  .form-inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 18px;

    label {
      font-size: 0.875rem;
      font-weight: 500;
      color: ${(props) => props.theme.gray1};
      margin-top: 10px;
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

  .form-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }

  @media (min-width: 900px) {
    gap: 24px;
  }
`;

export default StyledForm;
