import { useState } from "react";
import Modal from "./modal/Modal";
import { AnimatePresence } from "framer-motion";

const ExampleBasicModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      This is the basic modal with necessary functionalities added. <br /> Using
      this basic modal you can build any kind of reusable customise
      modal/dialog/popup. <br />
      <button onClick={() => setModalOpen(true)}>Open</button>
      <AnimatePresence>
        {modalOpen && (
          <Modal closeOnClickOutside setModalVisibility={setModalOpen}>
            This is the basic modal with all functionalitis,
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExampleBasicModal;
