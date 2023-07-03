import React from 'react';
import './index.scss';
import Modal from "./Modal";

function App() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      <Modal modalIsOpen={modalIsOpen} handleClick={() => setModalIsOpen(false) }/>
    </div>
  );
}

export default App;
