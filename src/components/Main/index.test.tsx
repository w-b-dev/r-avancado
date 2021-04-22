import { render, screen } from "@testing-library/react";
import Main from "./index";

describe("<Main>", () => {
  it("should render correctly", () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });

  it("should render the text correctly", () => {
    const { container } = render(<Main />);
    const target = screen.getByRole("main");
    expect(target).toHaveTextContent(/Hi/i);
  });
});
