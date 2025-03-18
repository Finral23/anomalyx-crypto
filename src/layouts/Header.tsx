import Link from "@/components/Link";

export function Header() {
  return (
    <header className=" w-full py-15">
      <nav className="flex justify-center md:justify-between items-center md:max-w-[80%] mx-auto">
        <div className="hidden md:flex gap-6 lg:gap-15">
          <Link href="#features">Home</Link>
          <Link href="#features">Why Choose Us</Link>
          <Link href="#portfolio">Portfolio</Link>
        </div>
        <img src="/logo.png" alt="logo" />
        <div className="hidden md:flex gap-6 lg:gap-15">
          <Link href="#how-to-buy">How to Buy</Link>
          <Link href="#testimonials">Reviews</Link>
          <Link href="#contact">Join Us</Link>
        </div>
      </nav>
    </header>
  );
}
