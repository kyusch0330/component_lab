import { useState } from "react";
import { Route } from "react-router-dom";
import "./ModalPage.scss";
import PageMenu from "views/PageMenu/PageMenu";
import BasicModal from "components/Modal/BasicModal/BasicModal";
import CookieModal from "components/Modal/CookieModal/CookieModal";
const ModalPage = () => {
  const [display, setDisplay] = useState(true);
  const [current, setCurrent] = useState(0);
  const paths = [
    ["basic modal", "/modal"],
    ["cookie modal", "/modal/cookie"],
  ];
  const components = [BasicModal, CookieModal];
  return (
    <div className="modalPageContainer">
      <PageMenu
        display={display}
        setDisplay={setDisplay}
        paths={paths}
        current={current}
        setCurrent={setCurrent}
      />

      {paths.map((path, pIndex) => (
        <Route
          exact
          path={path[1]}
          component={components[pIndex]}
          key={pIndex}
        />
      ))}
    </div>
  );
};

export default ModalPage;
