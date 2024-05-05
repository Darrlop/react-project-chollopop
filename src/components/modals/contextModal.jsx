import { createContext, useContext, useState } from "react";
import "./Modal.css";
// import "./Modal";

const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const [errorModal, setErrorModal] = useState("");
  const showErrorModal = (error) => setErrorModal(error);
  const hideErrorModal = () => setErrorModal("");

  const errorModalValue = {
    errorModal,
    showErrorModal,
    hideErrorModal,
  };

  return (
    <ModalContext.Provider value={errorModalValue}>
      {children}
      <article className={`modal ${!!errorModal && "is-open"}`}>
        <div className="modal-container">
          <button className="modal-close" onClick={hideErrorModal}>
            X
          </button>
          <h3>{errorModal}</h3>
        </div>
      </article>
    </ModalContext.Provider>
  );
}

export const useErrorModal = () => useContext(ModalContext);
