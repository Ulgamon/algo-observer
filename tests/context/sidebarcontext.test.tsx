import { render, screen } from "@testing-library/react";
import { SidebarProvider, useSidebar } from "../../src/context/sidebarcontext";
import userEvent from "@testing-library/user-event";

describe("Sidebarcontext", () => {
  it("should have right default values", () => {
    const TestComponent = () => {
      const { show, setHidden, setShow } = useSidebar();

      return (
        <div>
          <h1>{show.toString()}</h1>
          <button id="buttonClose" onClick={setHidden}>
            Close
          </button>
          <button id="buttonOpen" onClick={setShow}>
            Open
          </button>
        </div>
      );
    };

    render(
      <SidebarProvider showSidebar={false}>
        <TestComponent />
      </SidebarProvider>
    );

    const header = screen.getByRole("heading");
    expect(header).toHaveTextContent(/false/i);
  });

  it("should change show value to true if clicked open and vice versa.", async () => {
    const TestComponent = () => {
      const { show, setHidden, setShow } = useSidebar();

      return (
        <div>
          <h1>{show.toString()}</h1>
          <button data-testid="buttonClose" onClick={setHidden}>
            Close
          </button>
          <button data-testid="buttonOpen" onClick={setShow}>
            Open
          </button>
        </div>
      );
    };

    render(
      <SidebarProvider showSidebar={false}>
        <TestComponent />
      </SidebarProvider>
    );

    const header = screen.getByRole("heading");
    const openButton = screen.getByTestId("buttonOpen");
    const closeButton = screen.getByTestId("buttonClose");

    const user = userEvent.setup();
    await user.click(openButton);
    expect(header).toHaveTextContent(/true/i);

    await user.click(closeButton);
    expect(header).toHaveTextContent(/false/i);
  });
});
