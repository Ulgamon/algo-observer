import { Link } from "react-router";
import type { SidebarLinkData } from "../lib/data";

export const SidebarElement = ({ name, to }: SidebarLinkData) => {
  return (
    <li className="relative ps-4 flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors hover:bg-primary hover:text-black focus:bg-primary data-disabled:pointer-events-none data-disabled:opacity-50">
      <Link to={to}>{name}</Link>
    </li>
  );
};
