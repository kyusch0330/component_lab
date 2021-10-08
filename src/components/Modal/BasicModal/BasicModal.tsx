import React, { useState } from "react";
import ModalPortal from "../ModalPortal/ModalPortal";
import "./BasicModal.scss";
const BasicModal = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="basicModalContainer">
      <button className="basicModal_popBtn" onClick={() => setDisplay(true)}>
        pop
      </button>
      {display && (
        <ModalPortal>
          <div className="basicModal_overlay" onClick={() => setDisplay(false)}>
            <div
              className="basicModal"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h5>Modal Message</h5>
              <button
                className="basicModal_closeBtn"
                onClick={() => setDisplay(false)}
              >
                Close
              </button>
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
};

export default BasicModal;
