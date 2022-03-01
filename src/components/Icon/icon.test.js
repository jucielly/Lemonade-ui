import { render, screen } from "@testing-library/react";
import Icon, { icons } from ".";

describe("icon", () => {
  Object.keys(icons).forEach((icon) =>
    it(`Should match snapshot for ${icon}`, () => {
      const { baseElement } = render(<Icon icon={icon} />);

      expect(baseElement).toMatchSnapshot();
    })
  );
});
