import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children }: Props) => {
  return (
    <a href={href} className="text-gray-300 hover:text-green-600">
      {children}
    </a>
  );
};

export default Link;
