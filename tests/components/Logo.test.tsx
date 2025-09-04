import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Logo } from "../../src/components/Logo";
import { BrowserRouter } from "react-router";

describe("Logo", () => {
  it("should show algo observer text", () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Algo.Observer/i);
  });
});
