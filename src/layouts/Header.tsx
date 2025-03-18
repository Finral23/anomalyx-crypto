import Link from "@/components/Link";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className=" w-full py-15">
      <nav className="flex justify-center md:justify-around gap-8 items-center md:max-w-[90%] lg:max-w-[85%] mx-auto">
        <div className="hidden md:flex md:items-center gap-4 md:gap-8 lg:gap-15">
          <Link href="#home">Homepage</Link>
          <Link href="#features">About Us</Link>
          <Link href="#portfolio">Crypto Market</Link>
        </div>
        <img src={logo} alt="logo" />
        <div className="hidden md:flex md:items-center gap-4 md:gap-8 lg:gap-15">
          <Link href="#how-to-buy">How to Buy Crypto</Link>
          <Link href="#testimonials">Reviews</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
