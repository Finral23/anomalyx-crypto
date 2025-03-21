import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const FooterLink = ({ href, children }: Props) => {
  return (
    <a href={href} className="hover:text-[#0d0d0d]">
      {children}
    </a>
  );
};

export default FooterLink;
