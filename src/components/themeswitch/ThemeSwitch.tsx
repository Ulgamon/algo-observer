import { GoMoon, GoSun } from "react-icons/go";
import { useTheme } from "../../context/themecontext/themecontext";
import { Button } from "../retroui/Button";

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
    <Button className="m-4" size="sm" onClick={clickHandler}>
      {theme === "light" ? (
        <GoMoon className="w-6 h-6" />
      ) : (
        <GoSun className="w-6 h-6" />
      )}
    </Button>
  );
};

export default ThemeSwitch;
