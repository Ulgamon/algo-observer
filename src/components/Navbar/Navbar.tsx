import { Logo } from "../Logo/Logo";
import { Button } from "../retroui/Button";
import { Menu } from "../retroui/Menu";
import ThemeSwitch from "../themeswitch/ThemeSwitch";

function Navbar() {
  return (
    <div className="w-full fixed ">
      <div className=" max-w-[1600px] grid grid-flow-col pt-1 grid-cols-3 justify-around items-center mx-auto">
        <Logo className="col-span-1" />
        <div className="grid grid-flow-col col-span-1">
          <Menu>
            <Menu.Trigger asChild>
              <Button>Sorting</Button>
            </Menu.Trigger>
            <Menu.Content className="min-w-36">
              <Menu.Item>Menu Item 1</Menu.Item>
              <Menu.Item>Menu Item 2</Menu.Item>
              <Menu.Item>Menu Item 3</Menu.Item>
            </Menu.Content>
          </Menu>
          <Menu>
            <Menu.Trigger asChild>
              <Button>Sorting</Button>
            </Menu.Trigger>
            <Menu.Content className="min-w-36">
              <Menu.Item>Menu Item 1</Menu.Item>
              <Menu.Item>Menu Item 2</Menu.Item>
              <Menu.Item>Menu Item 3</Menu.Item>
            </Menu.Content>
          </Menu>
          <Menu>
            <Menu.Trigger asChild>
              <Button>Divide&Conquer</Button>
            </Menu.Trigger>
            <Menu.Content className="min-w-36">
              <Menu.Item>Menu Item 1</Menu.Item>
              <Menu.Item>Menu Item 2</Menu.Item>
              <Menu.Item>Menu Item 3</Menu.Item>
            </Menu.Content>
          </Menu>
          <Menu>
            <Menu.Trigger asChild>
              <Button>Divide&Conquer</Button>
            </Menu.Trigger>
            <Menu.Content className="min-w-36">
              <Menu.Item>Menu Item 1</Menu.Item>
              <Menu.Item>Menu Item 2</Menu.Item>
              <Menu.Item>Menu Item 3</Menu.Item>
            </Menu.Content>
          </Menu>
        </div>
        <ThemeSwitch className="col-span-1" />
      </div>
    </div>
  );
}

export default Navbar;
