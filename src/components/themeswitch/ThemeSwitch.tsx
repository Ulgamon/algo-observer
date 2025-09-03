import { GoMoon, GoSun } from "react-icons/go";
import { useTheme } from "../../context/themecontext/themecontext";
import { Switch } from "../retroui/Switch";

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();

  const clickHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Switch
      className=""
      onClick={clickHandler}
    >
      {theme === "light" ? (
        <GoMoon className="w-8 h-8" />
      ) : (
        <GoSun className="w-8 h-8" />
      )}
    </Switch>
  );
};

export default ThemeSwitch;
