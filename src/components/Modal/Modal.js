import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
