import { ReactNode } from "react";
import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
