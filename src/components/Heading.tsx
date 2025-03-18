import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Heading = ({ children }: Props) => {
  return (
    <h1 className=" max-w-4xl text-7xl text-green-500 uppercase">{children}</h1>
  );
};

export default Heading;
