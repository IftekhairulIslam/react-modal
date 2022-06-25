import "./App.css";
import ExampleBasicModal from "./components/ExampleBasicModal";
import ExampleAlertModal from "./components/ExampleAlertModal";
import ExampleConfirmModal from "./components/ExampleConfirmModal";
import ExampleConfirmModal2 from "./components/ExampleConfirmModal2";

function App() {
  return (
    <div className="app">
      <ExampleBasicModal />
      <br />
      <br />
      <ExampleAlertModal />
      <br />
      <br />
      <ExampleConfirmModal />
      <ExampleConfirmModal2 />
    </div>
  );
}

export default App;
