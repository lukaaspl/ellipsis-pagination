import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Tooltiped = ({ title, Icon }) => {
  return (
    <OverlayTrigger delay={250} placement="bottom" overlay={<Tooltip>{title}</Tooltip>}>
      <Icon />
    </OverlayTrigger>
  );
};

export default Tooltiped;
