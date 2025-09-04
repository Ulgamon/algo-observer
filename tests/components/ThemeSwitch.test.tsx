import { render, screen } from "@testing-library/react";
import ThemeSwitch from "../../src/components/ThemeSwitch";
import { ThemeProvider } from "../../src/context/themecontext";

describe("ThemeSwitchTest", () => {
  it("should be light and rendered", () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeSwitch />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("should be dark and rendered", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeSwitch />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
