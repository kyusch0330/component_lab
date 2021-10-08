import React from "react";
import ReactDOM from "react-dom";
interface Props {
  children: React.ReactNode;
}
const ModalPortal = (props: Props) => {
  const root = document.getElementById("root");
  if (root) return ReactDOM.createPortal(props.children, root);
  else return null;
};

export default ModalPortal;
