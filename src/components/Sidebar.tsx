import { createPortal } from "react-dom";
import { useSidebar } from "../context/sidebarcontext";
import { sidebarData } from "../lib/data";
import { SidebarClose } from "./SidebarClose";
import { SidebarList } from "./SidebarList";
import ThemeSwitch from "./ThemeSwitch";

export const Sidebar = () => {
  const { show, setHidden } = useSidebar();
  return (
    <>
      <div className="min-w-[250px] hidden start-0 outline-3 outline-dashed min-h-screen fixed 3xl:block">
        <div className="hidden 3xl:block">
          <ThemeSwitch />
        </div>
        <div className="mt-20">
          <ul className="pt-7 overflow-y-auto max-h-screen pb-24">
            {sidebarData.map((el) => (
              <SidebarList
                key={el.title}
                title={el.title}
                elements={el.elements}
              />
            ))}
          </ul>
        </div>
      </div>
      {show && (
        <div className="min-w-[250px] start-0 outline-3 z-20 bg-background outline-dashed min-h-screen fixed 3xl:hidden">
          <div className="flex w-full justify-items-end pt-1 pb-2 pe-5 mx-auto">
            <ThemeSwitch />
            <SidebarClose />
          </div>
          <div className="">
            <ul className="pt-7 overflow-y-auto max-h-screen pb-20">
              {sidebarData.map((el) => (
                <SidebarList
                  key={el.title}
                  title={el.title}
                  elements={el.elements}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
      {createPortal(
        <PortaledBackgroud setHidden={setHidden} show={show} />,
        document.body
      )}
    </>
  );
};

type PortaledBackgroudProps = {
  setHidden: () => void;
  show: boolean;
};

const PortaledBackgroud = ({ setHidden, show }: PortaledBackgroudProps) => {
  if (show) {
    return (
      <div
        onClick={setHidden}
        className="min-h-screen fixed start-0 top-0 w-full 3xl:hidden"
      ></div>
    );
  } else {
    return <></>;
  }
};
