import { Link } from "react-router";
import bgImage from "../../assets/logo.png";
import { Button } from "../retroui/Button";
import { Text } from "../retroui/Text";

type LogoProvider = {
  className?: string;
};

export const Logo = ({ className }: LogoProvider) => {
  return (
    <div className="flex justify-center items-center">
      <Button className="p-0 m-0 rounded-full w-min">
        <Link to={"#"}>
          <div
            className={"h-12 w-12" + ` ${className}`}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
            }}
          />
        </Link>
      </Button>
      <Text className="ms-2" as="h3">
        Algo Observer
      </Text>
    </div>
  );
};
