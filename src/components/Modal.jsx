import { useState, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    useOnClickOutside(modalRef, showModal, () => setShowModal(false));
  return (
    <div className="modal">
        <button onClick={() => setShowModal(!showModal)}>Open Modal</button>
        {showModal && (
            <div className="modal-content" ref={modalRef}>
                <span className="close" onClick={() => setShowModal(false)}>X</span>
                <p>Modal Content</p>
            </div>
        )}
    </div>
  )
}

export default Modal;
