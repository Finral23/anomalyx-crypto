import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { useCryptoData } from "@/hooks/useCryptoData";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts";

export default function Portfolio() {
  const { coins, loading, error } = useCryptoData();
  const [visibleCount, setVisibleCount] = useState(4);
  const [expanded, setExpanded] = useState(false);

  // Функция переключения количества монет
  const toggleCoins = () => {
    if (!expanded) {
      setVisibleCount(Math.min(10, coins.length));
    } else {
      // Прокрутка к началу списка
      setTimeout(() => {
        document
          .getElementById("portfolio")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (!expanded) {
      setTimeout(() => setVisibleCount(4), 300);
    }
  }, [expanded]);

  return (
    <section
      id="portfolio"
      className="max-w-4xl mx-auto py-16 px-5 lg:px-0 text-center"
    >
      <Heading>Build your own portfolio</Heading>

      {/* Лоадер и ошибки */}
      {loading && <p className="text-[#7ad95f] text-lg">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {/* Карточки */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 w-full overflow-hidden">
        <AnimatePresence>
          {coins.slice(0, visibleCount).map((coin) => {
            const priceChange = coin.price_change_1h;
            const isGrowing = priceChange >= 0;
            const graphColor = isGrowing ? "#7ad95f" : "#ff4d4d";

            return (
              <motion.div key={coin.id} className="flex justify-center py-6">
                <div className="border-2 bg-radial-[at_0%_100%] from-[#7ad95f]/20 to-[#0d0d0d] border-[#7ad95f] rounded-2xl p-5 flex flex-col justify-between w-100 h-100 transition-all duration-300 hover:scale-105">
                  {/* Заголовок */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="size-16"
                      />
                      <div className="flex gap-2 items-end">
                        <span
                          className="text-3xl font-bold uppercase"
                          style={{ color: graphColor }}
                        >
                          {coin.symbol}
                        </span>
                        <span
                          className="font-light"
                          style={{ color: graphColor }}
                        >
                          {coin.name}
                        </span>
                      </div>
                    </div>
                    <span
                      className="font-semibold"
                      style={{ color: graphColor }}
                    >
                      ${coin.current_price.toLocaleString()}
                    </span>
                  </div>

                  {/* Изменение за 1 час */}
                  <p className="text-lg mt-2" style={{ color: graphColor }}>
                    {isGrowing ? "▲" : "▼"} {priceChange.toFixed(2)}%
                  </p>

                  {/* График - теперь выше и адаптивный */}
                  {coin.sparkline.length > 0 ? (
                    <ResponsiveContainer width="100%" height={200}>
                      {/* Увеличена высота */}
                      <AreaChart
                        data={coin.sparkline.map((price, i) => ({ price, i }))}
                      >
                        <defs>
                          <linearGradient
                            id={`color${coin.id}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor={graphColor}
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor={graphColor}
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="price"
                          stroke={graphColor}
                          strokeWidth={3} /* Увеличена толщина линии */
                          fill={`url(#color${coin.id})`}
                          dot={false}
                        />
                        <YAxis domain={["dataMin", "dataMax"]} hide />{" "}
                        {/* Теперь график адаптивный */}
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <p className="text-gray-500">No data available</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Кнопка View More */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button size="lg" onClick={toggleCoins}>
          {expanded ? "View Less" : "View More"}
        </Button>
      </motion.div>
    </section>
  );
}
