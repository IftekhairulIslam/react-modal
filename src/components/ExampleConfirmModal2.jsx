import React, { useState } from "react";
import ModalConfirm from "./modal/ModalConfirm";
import { AnimatePresence } from "framer-motion";

const ExampleConfirmModal2 = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [deletingPopupOpen, setDeletingPopupOpen] = useState(false);
  const deleteHandler = () => {
    setIsDeleted(true);
  };

  return (
    <div>
      Example 2: Delete something - {isDeleted ? "Deleted" : "Not Deleted"} -{" "}
      <button onClick={() => setDeletingPopupOpen(true)}>Delete</button>
      <AnimatePresence>
        {deletingPopupOpen && (
          <ModalConfirm
            setModalVisibility={setDeletingPopupOpen}
            title="Are you sure?"
            description="If you delete this, it can't be undone!"
            confirmCallback={deleteHandler}
            confirmButtonText="Delete"
            isDanger={true}
          ></ModalConfirm>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExampleConfirmModal2;
