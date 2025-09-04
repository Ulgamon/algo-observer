import { Link } from "react-router";
import bgImage from "../assets/logo.png";
import { Button } from "./retroui/Button";
import { Text } from "./retroui/Text";

type LogoProvider = {
  className?: string;
};

export const Logo = ({ className }: LogoProvider) => {
  return (
    <Link to={"#"}>
      <Button className="w-min mx-auto rounded-2xl" variant="secondary">
        <div className="flex justify-center items-center">
          <div
            className={"h-12 w-12" + ` ${className}`}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
            }}
          />
          <Text className="ms-2 text-nowrap" as="h3">
            Algo.Observer
          </Text>
        </div>
      </Button>
    </Link>
  );
};
