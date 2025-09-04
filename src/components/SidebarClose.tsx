import { IoCloseSharp } from "react-icons/io5";
import { useSidebar } from "../context/sidebarcontext";
import { Button } from "./retroui/Button";

type SidebarButtonProps = {
  className?: string;
};

export const SidebarClose = ({ className }: SidebarButtonProps) => {
  const { setHidden } = useSidebar();

  return (
    <Button
      className={"mx-auto" + ` ${className}`}
      size="icon"
      onClick={setHidden}
    >
      <IoCloseSharp className="w-4 h-4" />
    </Button>
  );
};
