import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.typography.font};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  color: ${({ theme, color }) => theme.colors[color].contrast};
  background-color: ${({ theme, color }) => theme.colors[color].dark};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.md}   ${theme.spacing.sm}`};
  min-width: 311px;
  width: 100%;
  transition: 0.3s all ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, color }) => theme.colors[color].medium};
  }

  &:active {
    background-color: ${({ theme, color }) => theme.colors[color].darkest};
  }

  &:disabled {
    background-color: ${({ theme, color }) => theme.colors[color].light};
    cursor: auto;
  }

  display: flex;
  align-items: center;
  justify-content: ${({ hasIcon }) => (hasIcon ? "space-between" : "center")};
`;
