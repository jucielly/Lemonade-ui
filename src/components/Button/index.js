import { StyledButton } from "./style";

const Button = ({ icon, children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
