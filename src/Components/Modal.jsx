import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ largeImageURL, onClose }) => {
  return ReactDOM.createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
