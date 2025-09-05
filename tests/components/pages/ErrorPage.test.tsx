import { render, screen } from "@testing-library/react";
import { ErrorPage } from "../../../src/pages/ErrorPage";

describe("ErrorPage", () => {
  it("should show error 404 text", () => {
    render(<ErrorPage />);

    const errorPage = screen.getByRole("heading");

    expect(errorPage).toBeInTheDocument();
    expect(errorPage).toHaveTextContent(/error 404/i);
  });
});
