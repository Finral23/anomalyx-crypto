import FooterLink from "@/components/FooterLink";

export function Footer() {
  return (
    <footer className="bg-[#7ad95f] text-[#282828] font-semibold py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-6">
        {/* Логотип */}
        <div className="mb-6 md:mb-0">
          <img src="/logo-outline-gray.png" alt="logo" />
        </div>

        {/* Колонки ссылок */}
        <div className="flex flex-row gap-20 md:gap-30 ">
          {/* Колонка Company */}
          <div className="flex flex-col">
            <span className=" text-[#437336] pb-2">Company</span>
            <FooterLink href="#features">About</FooterLink>
            <FooterLink href="#portfolio">Portfolio</FooterLink>
            <FooterLink href="#testimonials">Reviews</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </div>

          {/* Колонка Social */}
          <div className="flex flex-col">
            <span className="text-[#437336] pb-2">Social</span>
            <FooterLink href="https://www.linkedin.com/in/vladyslav-svitelskyi-882a322a5/">
              LinkedIn
            </FooterLink>
            <FooterLink href="https://www.instagram.com/akanenai/">
              Instagram
            </FooterLink>
            <FooterLink href="https://t.me/akanenai">Telegram</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
