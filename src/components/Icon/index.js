import { ReactComponent as ArrowRight } from "./arrowRight.svg";
import { ReactComponent as Check } from "./check.svg";
import { ReactComponent as Refresh } from "./refresh.svg";
import PropTypes from "prop-types";
import React from "react";

export const icons = {
  "arrow-right": ArrowRight,
  check: Check,
  refresh: Refresh,
};

const Icon = ({ icon }) => {
  const IconComponent = icons[icon] || React.Fragment;
  return <IconComponent data-testid={`${icon}-icon`} />;
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)),
};

export default Icon;
