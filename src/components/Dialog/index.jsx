import { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";

export const Dialog = ({ isOpen, onClose, children }) => {
  const refDialog = useRef();

  useEffect(() => {
    if (isOpen) {
      refDialog.current.showModal();
    } else {
      refDialog.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = refDialog.current;
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("close", onClose);
    };
  }, [onClose]);

  return (
    <>
      <dialog ref={refDialog} className="dialog">
        <div className="actions">
          <button autoFocus onClick={onClose} className="btn-close">
            <IconClose />
          </button>
        </div>
        {children}
      </dialog>
    </>
  );
};

export default Dialog;
