import ThemeSwitch from "../themeswitch/ThemeSwitch";

function Navbar() {
  return (
    <div className="w-full fixed flex flex-row justify-around">
      <ThemeSwitch />
    </div>
  );
}

export default Navbar;
