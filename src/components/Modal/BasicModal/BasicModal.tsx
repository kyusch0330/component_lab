import React, { useState } from "react";
import "./BasicModal.scss";
const BasicModal = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="basicModalContainer">
      <button className="popBtn" onClick={() => setDisplay(true)}>
        pop
      </button>
      {display && (
        <div className="modalOverlay" onClick={() => setDisplay(false)}>
          <div
            className="modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h5>Modal Message</h5>
            <button className="closeBtn" onClick={() => setDisplay(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicModal;
