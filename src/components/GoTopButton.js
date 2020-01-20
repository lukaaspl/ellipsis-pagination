import React from "react";
import clsx from "clsx";
import Button from "react-bootstrap/Button";
import { scrollToTop } from "../helpers/scroll";
import { FaArrowUp } from "react-icons/fa";
import PropTypes from "prop-types";

const GoTopButton = ({ visible = true }) => (
  <Button
    className={clsx("back-to-top-btn", { "back-to-top-btn--visible": visible })}
    onClick={scrollToTop}
    variant="dark"
  >
    <FaArrowUp />
  </Button>
);

GoTopButton.propTypes = {
  visible: PropTypes.bool
};

export default GoTopButton;
