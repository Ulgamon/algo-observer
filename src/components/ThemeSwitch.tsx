import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "./retroui/Button";
import { useTheme } from "../context/themecontext";
type ThemeSwitchProps = {
  className?: string;
};

const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { setTheme, theme } = useTheme();

  const clickHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      className={"mx-auto" + ` ${className}`}
      size="icon"
      onClick={clickHandler}
    >
      {theme === "light" ? (
        <FaMoon className="w-4 h-4" />
      ) : (
        <FaSun className="w-4 h-4" />
      )}
    </Button>
  );
};

export default ThemeSwitch;
