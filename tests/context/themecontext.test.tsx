import { render, screen } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../src/context/themecontext";
import userEvent from "@testing-library/user-event";

describe("Themecontext", () => {
  it("should have default values", () => {
    const TestComponent = () => {
      const { theme } = useTheme();

      return (
        <>
          <h1>{theme}</h1>
          <button data-testid="dark">dark</button>
          <button data-testid="light">light</button>
        </>
      );
    };

    render(
      <ThemeProvider defaultTheme="system">
        <TestComponent />
      </ThemeProvider>
    );

    const theme = screen.getByRole("heading");
    expect(theme).toHaveTextContent(/light/);
  });

  it("should change values on button clicks respectively", async () => {
    const TestComponent = () => {
      const { theme, setTheme } = useTheme();

      return (
        <>
          <h1>{theme}</h1>
          <button data-testid="dark" onClick={() => setTheme("dark")}>
            dark
          </button>
          <button data-testid="light" onClick={() => setTheme("light")}>
            light
          </button>
        </>
      );
    };

    render(
      <ThemeProvider defaultTheme="system">
        <TestComponent />
      </ThemeProvider>
    );

    const theme = screen.getByRole("heading");
    const darkButton = screen.getByTestId("dark");
    const lightButton = screen.getByTestId("light");

    const user = userEvent.setup();

    await user.click(darkButton);

    expect(theme).toHaveTextContent(/dark/i);

    await user.click(lightButton);

    expect(theme).toHaveTextContent(/light/i);
  });
});
