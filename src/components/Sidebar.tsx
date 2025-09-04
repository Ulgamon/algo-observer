import { Text } from "./retroui/Text";
import { SidebarElement } from "./SidebarElement";

export const Sidebar = () => {
  return (
    <div className="min-w-[250px] fixed start-0 outline-3 outline-dashed min-h-screen">
      <div className="mt-20">
        <ul className="pt-3">
          <li>
            <Text className="ps-2" as="h6">Sorting</Text>
            <ul>
              <SidebarElement>Bubble Sort</SidebarElement>
              <SidebarElement>Insertion Sort</SidebarElement>
              <SidebarElement>Bubble Sort</SidebarElement>
            </ul>
          </li>
          <li>
            <Text className="ps-2" as="h6">Algorithms</Text>
          </li>
          <li>
            <Text className="ps-2" as="h6">Algorithms</Text>
          </li>
        </ul>
      </div>
    </div>
  );
};
