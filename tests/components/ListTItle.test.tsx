import { render, screen } from "@testing-library/react";
import { ListTitle } from "../../src/components/ListTitle";

describe("ListTitle", () => {
  it("should render given variable", () => {
    const val = "VALUE";
    render(<ListTitle title={val} />);

    expect(screen.getByText(val)).toBeInTheDocument();
  });
});
