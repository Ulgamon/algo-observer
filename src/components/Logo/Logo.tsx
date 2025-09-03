import bgImage from "../../assets/logo.png";
import { Button } from "../retroui/Button";
import { Text } from "../retroui/Text";

export const Logo = () => {
  return (
    <div className="grid grid-flow-col justify-around items-center mx-auto">
      <Button className="p-0 m-0 rounded-full w-min">
        <a
          href="#"
          className="h-12 w-12"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
          }}
        />
      </Button>
      <Text className="ms-2" as="h3">Algo Observer</Text>
      </div>
  );
};
