export function Header() {
  return (
    <header className=" w-full p-4 bg-black z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <a href="#home" className="text-2xl font-bold text-green-500">
          CryptoSite
        </a>
        <div className="flex gap-4">
          <a href="#features" className="hover:text-green-400">
            Why Choose Us
          </a>
          <a href="#portfolio" className="hover:text-green-400">
            Portfolio
          </a>
          <a href="#how-to-buy" className="hover:text-green-400">
            How to Buy
          </a>
          <a href="#testimonials" className="hover:text-green-400">
            Reviews
          </a>
          <a href="#contact" className="hover:text-green-400">
            Join Us
          </a>
        </div>
      </nav>
    </header>
  );
}
