import { createContext, useContext, useMemo, useState } from "react";

type SidebarProps = {
  children: React.ReactNode;
  showSidebar: boolean;
};

type SidebarProviderState = {
  show: boolean;
  setHidden: () => void;
  setShow: () => void;
};

const initialState: SidebarProviderState = {
  show: false,
  setHidden: () => null,
  setShow: () => null,
};

const SidebarProviderContext =
  createContext<SidebarProviderState>(initialState);

export function SidebarProvider({
  children,
  showSidebar = false,
  ...props
}: Readonly<SidebarProps>) {
  const [show, setShow] = useState<boolean>(showSidebar);

  const value = useMemo(
    () => ({
      show: show,
      setHidden: () => setShow(false),
      setShow: () => setShow(true),
    }),
    [show, setShow]
  );

  return (
    <SidebarProviderContext.Provider {...props} value={value}>
      {children}
    </SidebarProviderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
  const context = useContext(SidebarProviderContext);

  if (context === undefined)
    throw new Error("useSidebar must be used within a SidebarProvider");

  return context;
};
