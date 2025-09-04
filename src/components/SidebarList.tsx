import type { SidebarListData } from "../lib/data";
import { Text } from "./retroui/Text";
import { SidebarElement } from "./SidebarElement";

export const SidebarList = ({ elements, title }: SidebarListData) => {
  return (
    <>
      <Text className="ps-2" as="h5">{title}</Text>
      <ul>
        {elements.map((element) => (
          <SidebarElement
            key={element.to}
            name={element.name}
            to={element.to}
          />
        ))}
      </ul>
    </>
  );
};
