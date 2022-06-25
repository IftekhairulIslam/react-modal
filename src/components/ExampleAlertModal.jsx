import React, { useState } from "react";
import ModalAlert from "./modal/ModalAlert";

const ExampleAlertModal = () => {
  const [showAlert, setShowAlert] = useState();
  return (
    <div>
      Reusable Alert - <button onClick={() => setShowAlert(true)}>Open</button>
      {showAlert && (
        <ModalAlert
          setModalVisibility={setShowAlert}
          title="Quote Alert"
          description="Everyone needs to take the first step to win the marathon!"
        ></ModalAlert>
      )}
    </div>
  );
};

export default ExampleAlertModal;
