import { GlowingCircles } from "@/components/GlowingCircles";
import HeroInfo from "@/components/HeroInfo";
import { useInView } from "react-intersection-observer";

export function Home() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="home">
      <GlowingCircles />
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <HeroInfo />
      </div>
    </section>
  );
}
