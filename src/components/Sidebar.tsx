import { sidebarData } from "../lib/data";
import { SidebarList } from "./SidebarList";

export const Sidebar = () => {
  return (
    <div className="min-w-[250px] hidden start-0 outline-3 outline-dashed min-h-screen fixed 3xl:block">
      <div className="mt-20">
        <ul className="pt-7 overflow-y-auto max-h-screen pb-24">
          {sidebarData.map((el) => (
            <SidebarList title={el.title} elements={el.elements} />
          ))}
        </ul>
      </div>
    </div>
  );
};
