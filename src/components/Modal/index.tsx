import StyledModal from "./styled";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface IModal {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

const Modal = ({ modalIsOpen, setModalIsOpen, children }: IModal) => {
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <>
      {modalIsOpen === true ? (
        <StyledModal className="modal">
          <div className="container">
            <div className="modal-header">
              <h5 className="form-title">Editar perfil</h5>
              <button
                className="close-modal"
                onClick={() => {
                  closeModal();
                }}
              >
                <IoClose />
              </button>
            </div>
            {children}
          </div>
        </StyledModal>
      ) : null}
    </>
  );
};

export default Modal;
