import React, { useState } from "react";
import ModalAlert from "./modal/ModalAlert";
import { AnimatePresence } from "framer-motion";

const ExampleAlertModal = () => {
  const [showAlert, setShowAlert] = useState();
  return (
    <div>
      Reusable Alert - <button onClick={() => setShowAlert(true)}>Open</button>
      <AnimatePresence>
        {showAlert && (
          <ModalAlert
            setModalVisibility={setShowAlert}
            title="Quote Alert"
            description="Everyone needs to take the first step to win the marathon!"
          ></ModalAlert>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExampleAlertModal;
