import { IoMenu } from "react-icons/io5";
import { useSidebar } from "../context/sidebarcontext";
import { Button } from "./retroui/Button";

type SidebarButtonProps = {
  className?: string;
};

export const SidebarButton = ({ className }: SidebarButtonProps) => {
  const { setShow } = useSidebar();

  return (
    <Button
      className={"mx-auto" + ` ${className}`}
      size="icon"
      onClick={setShow}
    >
      <IoMenu className="w-4 h-4" />
    </Button>
  );
};
