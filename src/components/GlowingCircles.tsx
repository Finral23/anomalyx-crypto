export function GlowingCircles() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Основной текст */}
      <h1 className="text-9xl font-bold text-[#7ad95f] relative z-20 text-center tracking-wide">
        <span className="text-neon font-extrabold italic">Smarter</span>{" "}
        <span className="text-outline italic">Investments</span>
        <br />
        <span className="text-neon font-extrabold italic">Better</span>{" "}
        <span className="text-outline italic">Trades</span>
        <br />
        <span className="text-neon font-extrabold italic">Bigger</span>{" "}
        <span className="text-outline italic">Protits</span>
      </h1>

      {/* Круги */}
      <div className="absolute inset-0 flex items-center justify-center animate-pulse">
        {/* Центральный круг */}
        <div className="absolute size-160 bg-gradient-to-tr from-black via-black via-50% to-[#7ad95f] border-2 border-[#7ad95f] rounded-full shadow-[0_0_100px_#7ad95f] z-10 "></div>

        {/* Левый круг */}
        <div className="absolute size-130 bg-gradient-to-tr from-black via-black via-20% to-[#7ad95f]/90 rounded-full shadow-[0_0_100px_#7ad95f] translate-x-80"></div>

        {/* Правый круг */}
        <div className="absolute size-130 bg-gradient-to-br from-black via-black via-20% to-[#7ad95f]/60 rounded-full shadow-[0_0_100px_#7ad95f] -translate-x-80"></div>
      </div>
    </div>
  );
}
