import { StyledButton } from "./style";
import Icon from "../Icon";
import PropTypes from "prop-types";
import React from "react";

const Button = ({ icon, children, ...props }) => {
  return (
    <StyledButton hasIcon={!!icon} {...props}>
      {children}
      {icon && <Icon icon={icon} />}
    </StyledButton>
  );
};

Button.propTypes = {
  icon: Icon.propTypes.icon,
  color: PropTypes.oneOf(["primary", "secondary"]),
  ...StyledButton.propTypes,
};

Button.defaultProps = {
  color: "primary",
};
export default Button;
