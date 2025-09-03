import { useTheme } from "../../context/themecontext/themecontext";
import { Button } from "../retroui/Button";
import { FaMoon, FaSun } from "react-icons/fa";

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
    <Button className="mx-auto" size="icon" onClick={clickHandler}>
      {theme === "light" ? (
        <FaMoon className="w-4 h-4" />
      ) : (
        <FaSun className="w-4 h-4" />
      )}
    </Button>
  );
};

export default ThemeSwitch;
