import { fireEvent, render, screen } from "@testing-library/react";
import Theme from "../../Theme";
import Button from "./index";

const renderWithTheme = (component, options) =>
  render(component, {
    wrapper: Theme,
    ...options,
  });

describe("Button", () => {
  it("Should display icon", () => {
    const icon = "arrow-right";
    renderWithTheme(<Button icon={icon} />);

    expect(screen.getByTestId(`${icon}-icon`)).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { container } = renderWithTheme(
      <Button color="primary">Click me!</Button>
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("Should be disabled", () => {
    const clickMock = jest.fn();
    renderWithTheme(
      <Button disabled onClick={clickMock}>
        Click me!
      </Button>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveProperty("disabled");
    fireEvent.click(buttonElement);
    expect(clickMock).not.toBeCalled();
  });

  it("Should listen do click", () => {
    const clickMock = jest.fn();
    renderWithTheme(<Button onClick={clickMock}>Click me!</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(clickMock).toBeCalled();
  });
});
