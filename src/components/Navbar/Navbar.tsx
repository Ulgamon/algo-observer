import { Logo } from "../Logo/Logo";
import { Button } from "../retroui/Button";
import { Menu } from "../retroui/Menu";
import ThemeSwitch from "../themeswitch/ThemeSwitch";

function Navbar() {
  return (
    <div className="w-full fixed ">
      <div className=" max-w-[1600px] grid grid-flow-col pt-1 justify-around items-center mx-auto">
        <Logo />
        <div className="grid grid-flow-col me-5">
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
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default Navbar;
