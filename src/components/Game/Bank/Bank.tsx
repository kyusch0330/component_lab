import React from "react";
import "./Bank.scss";

const Bank = () => {
  return (
    <div className="bankContainer">
      <button
        onClick={() => {
          let gm = Number(localStorage.getItem("gameMoney"));
          if (!gm) gm = 1000;
          localStorage.setItem("gameMoney", (gm + 100).toString());
        }}
      >
        loan
      </button>
    </div>
  );
};

export default Bank;
