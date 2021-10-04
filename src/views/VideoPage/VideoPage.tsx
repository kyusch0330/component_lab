import { useState } from "react";
import { Route } from "react-router-dom";
import "./VideoPage.scss";
import PageMenu from "views/PageMenu/PageMenu";
import BasicModal from "components/Modal/BasicModal/BasicModal";
const VideoPage = () => {
  const [display, setDisplay] = useState(true);
  const [current, setCurrent] = useState(0);
  const paths = [["video", "/video"]];
  const components = [BasicModal];
  return (
    <div className="videoPageContainer">
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

export default VideoPage;
