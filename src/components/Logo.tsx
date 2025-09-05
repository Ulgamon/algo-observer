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
      <Button className="w-min mx-auto px-2 py-1 2xl:px-4 2xl:py-1.5" variant="secondary">
        <div className="flex justify-center items-center">
          <div
            className={"h-10 w-10 2xl:w-12 2xl:h-12" + ` ${className}`}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
            }}
          />
          <Text className="ms-2 text-nowrap hidden 2xl:block" as="h3">
            Algo.Observer
          </Text>
        </div>
      </Button>
    </Link>
  );
};
