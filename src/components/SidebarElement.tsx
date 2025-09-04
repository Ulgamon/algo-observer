export const SidebarElement: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <li className="relative ps-4 text-black flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors hover:bg-primary focus:bg-primary data-disabled:pointer-events-none data-disabled:opacity-50">
      {children}
    </li>
  );
};
