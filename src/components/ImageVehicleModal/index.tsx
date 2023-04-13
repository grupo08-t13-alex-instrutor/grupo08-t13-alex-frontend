import { StyledImageCarModal } from "./styled";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export const ImageVehicleModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      {modalIsOpen === true ? (
        <StyledImageCarModal onClick={closeModal}>
          <div className="container">
            <div className="modal-header">
              <h6 className="heading-7-500">Imagem do veículo</h6>
              <button
                className="close-modal"
                onClick={(el) => {
                  el.preventDefault;
                  closeModal();
                }}
              >
                <IoClose />
              </button>
            </div>
            <div className="image-container">
              <img
                src="https://otrentino.com.br/wp-content/uploads/WhatsApp-Image-2019-12-12-at-12.13.45-1.jpeg"
                alt="car-image"
              />
            </div>
          </div>
        </StyledImageCarModal>
      ) : null}
    </>
  );
};
