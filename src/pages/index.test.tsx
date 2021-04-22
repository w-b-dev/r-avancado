import { render } from "@testing-library/react";
import Home from "./index";

describe("pages/index.tsx", () => {
  it("should render correctly", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
