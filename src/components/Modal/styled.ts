import styled from "styled-components";

const StyledModal = styled.div`
  position: absolute;
  z-index: 1000;
  max-width: 100vw;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    background-color: ${(props) => props.theme.whiteFixed};
    width: 85%;
    max-width: 520px;
    min-width: 374px;
    height: auto;
    max-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    .modal-header {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 36px;

      h5 {
        margin: 0;
      }
      .close-modal {
        border: none;
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
  }
`;

export default StyledModal;
