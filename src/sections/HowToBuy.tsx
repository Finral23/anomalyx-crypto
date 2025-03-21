import Heading from "@/components/Heading";
import HowToStep from "@/components/HowToStep";
import { useInView } from "react-intersection-observer";

export default function HowToBuy() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="how-to-buy" className="max-w-5xl mx-auto py-16 text-center">
      {/* Заголовок */}
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
        }`}
      >
        <Heading>how to buy crypto</Heading>
      </div>

      {/* Контейнер для шагов */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        <HowToStep
          number="01"
          title="Registration here, our system is smart enough to assist you"
          hasBorder
        />
        <HowToStep
          number="02"
          title="Keep the phone close, an official AI trade representative will call you."
          hasBorder
        />
        <HowToStep
          number="03"
          title="Make a $200 deposit and enjoy the process."
        />
      </div>
    </section>
  );
}
