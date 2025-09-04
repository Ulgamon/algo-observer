import { Text } from "./retroui/Text";

type ListTitleProps = {
  title: string;
  className?: string;
};

export const ListTitle = ({ title, className }: ListTitleProps) => {
  return <Text className={"" + ` ${className}`}>{title}</Text>;
};
