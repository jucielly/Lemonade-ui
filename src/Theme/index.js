import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const theme = {
  colors: {
    primary: {
      light: "#B7D0B6",
      medium: "#079504",
      dark: "#026C00",
      darkest: "#013C00",
      contrast: "#ffffff",
    },
    secondary: {
      light: "#FFE58D",
      medium: "#FFDF77",
      dark: "#F7C346",
      darkest: "#DCAC0D",
      contrast: "#000000",
    },
  },
  typography: {
    font: "'Inter', sans-serif",
    sizes: {
      md: "1rem",
    },
  },
  spacing: {
    sm: "1rem",
    md: "1.25rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
