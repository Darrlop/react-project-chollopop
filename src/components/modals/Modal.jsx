import Button from "../shared/Button";
import "./Modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
