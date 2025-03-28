import Heading from "@/components/Heading";
import { Stats } from "@/components/Stats";
import { useInView } from "react-intersection-observer";

export function Features() {
  const { ref: ref0, inView: inView0 } = useInView({ triggerOnce: true });
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });

  return (
    <section
      id="features"
      className="max-w-7xl mx-auto py-16 px-5 text-center flex flex-col items-center"
    >
      <div
        ref={ref0}
        className={`transition-all duration-700 ${
          inView0 ? "opacity-100 " : "opacity-0"
        }`}
      >
        <Heading>Why Choose Us?</Heading>
      </div>

      {/* Grid контейнер */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-5 mt-10 w-full">
        {/* Первый блок (AI Insights) */}
        <div
          ref={ref1}
          className={`transition-all duration-700 ${
            inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        >
          <div className="relative flex flex-col justify-between text-[#7ad95f] rounded-4xl md:rounded-br-none bg-radial-[at_100%_100%] from-[#7ad95f]/50 via-[#282828] to-[#0d0d0d] transition-all duration-300 hover:scale-105">
            <div className="py-15 px-5 lg:pl-10 flex justify-between gap-5 lg:gap-20">
              <div className="text-end">
                <h3 className="text-4xl font-semibold pb-10">
                  Smarter Trading with AI Insights
                </h3>
                <p className="text-xl font-semibold">
                  Leverage cutting-edge AI-powered analytics to make informed
                  trading decisions. Our advanced algorithms track market trends
                  in real-time, helping you stay ahead of the competition.
                </p>
              </div>
              <span className="hidden md:block text-8xl highrise px-5">01</span>
            </div>
            <img
              src="/bitcoin-tl.png"
              alt="Bitcoin logo"
              className="hidden md:block w-[100px] h-[100px] self-end"
            />
          </div>
        </div>

        {/* Второй блок (Low Fees, вверху справа) */}
        <div
          ref={ref2}
          className={`transition-all duration-700 ${
            inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="relative h-full flex flex-col md:justify-between text-[#282828] rounded-4xl md:rounded-bl-none bg-[#7ad95f] transition-all duration-300 hover:scale-105">
            <div className="py-15 px-5 flex justify-between gap-5 lg:gap-20">
              <span className="hidden md:block text-8xl highrise px-5">02</span>
              <div className="text-start">
                <h3 className="text-4xl font-semibold pb-10">
                  Low Fees, High Returns
                </h3>
                <p className="text-xl font-semibold">
                  Maximize your profits with our low transaction fees and
                  competitive pricing. Unlike traditional platforms, we ensure
                  transparent costs with no hidden charges.
                </p>
              </div>
            </div>
            <img
              src="/bitcoin-tr.png"
              alt="Bitcoin logo"
              className="hidden md:block w-[100px] h-[100px] self-start"
            />
          </div>
        </div>

        {/* Третий блок (Secure Transactions, внизу справа) */}
        <div
          ref={ref3}
          className={`transition-all duration-700 ${
            inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="relative h-full flex flex-col justify-between text-[#282828] rounded-4xl md:rounded-tr-none bg-[#7ad95f] transition-all duration-300 hover:scale-105">
            <div className="pl-5 lg:pl-15 flex justify-between gap-5 lg:gap-20">
              <div className="text-end">
                <h3 className="px-5 md:px-0 text-4xl font-semibold pt-15 pb-10">
                  Secure & Fast Transactions
                </h3>
                <p className="px-5 md:px-0 text-xl font-semibold">
                  Maximize your profits with our low transaction fees and
                  competitive pricing. Unlike traditional platforms, we ensure
                  transparent costs with no hidden charges.
                </p>
              </div>
              <img
                src="/bitcoin-bl.png"
                alt="Bitcoin logo"
                className="hidden md:block w-[100px] h-[100px] "
              />
            </div>
            <span className="hidden md:block text-8xl highrise self-end pr-10 pb-15">
              03
            </span>
          </div>
        </div>

        {/* Четвёртый блок (Multi-Asset Trading, внизу слева) */}
        <div
          ref={ref4}
          className={`transition-all duration-700 ${
            inView4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="relative h-full flex flex-col justify-between text-[#7ad95f] rounded-4xl md:rounded-tl-none bg-blur-2xl bg-radial-[at_0%_0%] from-[#7ad95f]/50 via-[#282828] to-[#0d0d0d] transition-all duration-300 hover:scale-105">
            <div className="pr-5 lg:pr-15 flex justify-between gap-5 lg:gap-20">
              <img
                src="/bitcoin-br.png"
                alt="Bitcoin logo"
                className=" hidden md:block w-[100px] h-[100px] "
              />
              <div className="text-start">
                <h3 className="text-4xl font-semibold px-5 md:px-0 pt-15 pb-10">
                  Multi-Asset Trading & 24/7 Support
                </h3>
                <p className="px-5 md:px-0 text-xl font-semibold">
                  Trade across multiple cryptocurrencies, including BTC, ETH,
                  BNB, and more. Our dedicated support team is available 24/7,
                  ensuring you always have expert guidance.
                </p>
              </div>
            </div>
            <span className="hidden md:block text-8xl highrise self-start pl-10 pb-15">
              04
            </span>
          </div>
        </div>
      </div>
      <div
        ref={ref5}
        className={`transition-all duration-700 ${
          inView5 ? "opacity-100 " : "opacity-0"
        }`}
      >
        <Stats />
      </div>
    </section>
  );
}
