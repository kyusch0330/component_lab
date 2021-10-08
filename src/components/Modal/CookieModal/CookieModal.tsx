import React, { useEffect, useState } from "react";
import "./CookieModal.scss";
import { setCookie, getCookie, delCookie } from "utils/cookie";
import ModalPortal from "../ModalPortal/ModalPortal";
const cookieModalKey = "showCookieModal";
const CookieModal = () => {
  const [display, setDisplay] = useState(false);
  const [checked, setChecked] = useState(false);
  const [cookieExist, setCookieExist] = useState(false);

  useEffect(() => {
    const needToshow = getCookie(cookieModalKey);
    if (!needToshow) {
      setDisplay(true);
    } else {
      setCookieExist(true);
    }
  }, []);

  return (
    <div className="cookieModalContainer">
      <button
        className={`cookieModal_resetBtn${cookieExist ? " active" : ""}`}
        onClick={() => {
          if (!cookieExist) return;
          delCookie(cookieModalKey);
          setCookieExist(false);
          alert("cookie is deleted.");
        }}
      >
        reset cookie
      </button>
      {display && (
        <ModalPortal>
          <div
            className="cookieModal_overlay"
            onClick={() => setDisplay(false)}
          >
            <div
              className="cookieModal"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h5>Modal Message</h5>
              <label>
                <input
                  type="checkbox"
                  onChange={() => {
                    setChecked((checked) => !checked);
                  }}
                />
                &nbsp;1분간 보지 않기
              </label>
              <button
                className="cookieModal_closeBtn"
                onClick={() => {
                  if (checked) {
                    setCookie(cookieModalKey, "true", 1);
                    setCookieExist(true);
                  }
                  setDisplay(false);
                }}
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

export default CookieModal;
