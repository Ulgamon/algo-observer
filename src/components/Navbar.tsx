import { Logo } from "./Logo";
import { Button } from "./retroui/Button";
import { Menu } from "./retroui/Menu";
import { SidebarButton } from "./SidebarButton";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  return (
    <div className="w-full fixed bg-background dark:bg-background z-10 outline-3 outline-dashed pb-2">
      <div className=" max-w-[1600px] grid grid-flow-col pt-1 grid-cols-3 justify-around items-center mx-auto">
        <Logo className="col-span-1" />
        <div className="grid-flow-col col-span-1 hidden 2xl:grid">
          <Menu>
            <Menu.Trigger asChild>
              <Button className="font-sans">Sorting</Button>
            </Menu.Trigger>
            <Menu.Content className="min-w-36">
              <Menu.Item>Menu Item 11</Menu.Item>
              <Menu.Item>Menu Item 32</Menu.Item>
              <Menu.Item>Menu Item 32</Menu.Item>
            </Menu.Content>
          </Menu>
          <Menu>
            <Menu.Trigger asChild>
              <Button className="font-sans">Algorithms</Button>
            </Menu.Trigger>
            <Menu.Content className="min-w-36">
              <Menu.Item>Menu Item 178</Menu.Item>
              <Menu.Item>Menu Item 28</Menu.Item>
              <Menu.Item>Menu Item 367</Menu.Item>
            </Menu.Content>
          </Menu>
          <Menu>
            <Menu.Trigger asChild>
              <Button className="font-sans">Divide&Conquer</Button>
            </Menu.Trigger>
            <Menu.Content className="min-w-36">
              <Menu.Item>Menu Item 1275</Menu.Item>
              <Menu.Item>Menu Item 22465</Menu.Item>
              <Menu.Item>Menu Item 3234</Menu.Item>
            </Menu.Content>
          </Menu>
          <Menu>
            <Menu.Trigger asChild>
              <Button className="font-sans text-nowrap">Data Structures</Button>
            </Menu.Trigger>
            <Menu.Content className="min-w-36">
              <Menu.Item>Menu Item 1134</Menu.Item>
              <Menu.Item>Menu Item 2453</Menu.Item>
              <Menu.Item>Menu Item 3543</Menu.Item>
            </Menu.Content>
          </Menu>
        </div>
        <ThemeSwitch className="col-span-1 hidden 2xl:block" />
        <SidebarButton className="col-span-1 2xl:hidden" />
      </div>
    </div>
  );
}

export default Navbar;
