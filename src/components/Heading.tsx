import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Heading = ({ children }: Props) => {
  return <h1 className="text-7xl color-green uppercase">{children}</h1>;
};

export default Heading;
