import React from "react";
import { Link } from "react-router-dom";
import "./ComponentItem.scss";
interface Props {
  name: string;
  path: string;
  children: any; //React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const ComponentItem = ({ name, path, children }: Props) => {
  return (
    <Link className="componentItemLink" to={path}>
      <div className="componentItemInner">
        {children}
        <span className="componentName">{name}</span>
      </div>
    </Link>
  );
};

export default ComponentItem;
