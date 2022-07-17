import React, { useState } from "react";
import ModalConfirm from "./modal/ModalConfirm";
import { AnimatePresence } from "framer-motion";

const ExampleConfirmModal = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmingPopupOpen, setConfirmingPopupOpen] = useState(false);
  const saveHandler = () => {
    setIsConfirmed(true);
  };

  return (
    <div>
      Reusable Confirm Popup.
      <br />
      Example 1: Confirm something -{" "}
      {isConfirmed ? "Confirmed" : "Not Confirmed"} -{" "}
      <button onClick={() => setConfirmingPopupOpen(true)}>Save</button>
      <AnimatePresence>
        {confirmingPopupOpen && (
          <ModalConfirm
            title="Are you sure you want to save it?"
            setModalVisibility={setConfirmingPopupOpen}
            confirmCallback={saveHandler}
          ></ModalConfirm>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExampleConfirmModal;
