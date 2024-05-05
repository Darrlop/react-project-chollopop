import "./Modal.css";

// const Modal = ({ isOpen, closeModal, children }) => {
//   return (
//     <article className={`modal ${isOpen && "is-open"}`}>
//       <div className="modal-container">
//         <button className="modal-close" onClick={closeModal}>
//           X
//         </button>
//         {children}
//       </div>
//     </article>
//   );
// };

// export default Modal;

import { useState } from "react";
import "./Modal.css";

export function ConfirmModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  //return { isOpen, openModal, closeModal };

  return (
    <article className={`modal ${!!errorModal && "is-open"}`}>
      <div className="modal-container">
        <button className="modal-close" onClick={hideErrorModal}>
          X
        </button>
        <h3>{errorModal}</h3>
      </div>
    </article>
  );
}

//export const useErrorModal = () => useContext(ModalContext);
