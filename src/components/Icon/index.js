import { ReactComponent as ArrowRight } from "./arrowRight.svg";
import { ReactComponent as Check } from "./check.svg";
import { ReactComponent as Refresh } from "./refresh.svg";
import PropTypes from "prop-types";
import React from "react";

const icons = {
  "arrow-right": ArrowRight,
  check: Check,
  refresh: Refresh,
};

const Icon = ({ icon }) => {
  const IconComponent = icons[icon] || React.Fragment;
  return <IconComponent />;
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)),
};

export default Icon;
