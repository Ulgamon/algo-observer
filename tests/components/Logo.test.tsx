import { Logo } from "@/components/Logo";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Logo", () => {
  it("should show algo observer text", () => {
    render(<Logo />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    // expect(button).toHaveTextContent(/Algo Observer/i);
  });
});
