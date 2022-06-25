import { useState } from "react";
import Modal from "./modal/Modal";

const ExampleBasicModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      This is the basic modal with necessary functionalities added. Using this
      basic modal you can build any kind of reusable customise
      modal/dialog/popup. <br />
      <button onClick={() => setModalOpen(true)}>Open</button>
      {modalOpen && (
        <Modal closeOnClickOutside={true} setModalVisibility={setModalOpen}>
          This is the basic modal with all functionalitis,
        </Modal>
      )}
    </div>
  );
};

export default ExampleBasicModal;
