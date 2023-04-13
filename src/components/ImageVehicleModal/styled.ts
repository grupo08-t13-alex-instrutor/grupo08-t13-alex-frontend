import styled from "styled-components";

export const StyledImageCarModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .closed {
    display: none;
  }

  .container {
    width: 344px;
    height: 365px;
    background-color: ${(props) => props.theme.whiteFixed};
    border-radius: 8px;
    padding: 0px 16px 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    margin-top: 94px;

    .modal-header {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;
      height: 68px;
      justify-content: space-between;
      align-items: center;

      h6 {
        width: 154px;
      }

      button {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        color: ${(props) => props.theme.gray4};
        font-size: 30px;
        border-radius: 50%;

        :hover {
          transform: scale(1.1);
          background-color: ${(props) => props.theme.alert1};
          color: ${(props) => props.theme.whiteFixed};
          transition: 300ms ease-in-out;
        }
      }
    }

    .image-container {
      width: 100%;
      height: 239px;
      border-radius: 4px;
      background-color: ${(props) => props.theme.gray7};
      text-align: center;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  @media (min-width: 900px) {
    .container {
      width: 520px;
      height: 354px;
    }
  }
`;
