import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { motion, AnimatePresence } from "framer-motion";

// Определяем тип данных для криптовалют
type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  sparkline_in_7d: { price: number[] };
};

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

export default function Portfolio() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data: Coin[]) => setCoins(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Функция переключения количества монет
  const toggleCoins = () => {
    if (!expanded) {
      setVisibleCount(Math.min(8, coins.length));
    }
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (!expanded) {
      setTimeout(() => setVisibleCount(4), 300); // Ожидание перед уменьшением
    }
  }, [expanded]);

  return (
    <section className="max-w-4xl mx-auto py-16 text-center">
      <Heading>Build your own portfolio</Heading>

      {/* Карточки (с фиксом бага высоты) */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 w-full overflow-hidden"
        animate={{ height: expanded ? "full" : "auto" }} // Теперь нет багов с `maxHeight`
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <AnimatePresence>
          {coins.slice(0, visibleCount).map((coin) => {
            const priceChange = coin.sparkline_in_7d.price;
            const isGrowing =
              priceChange[priceChange.length - 1] >= priceChange[0];
            const graphColor = isGrowing ? "#7ad95f" : "#ff4d4d";

            return (
              <motion.div
                key={coin.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center py-6"
              >
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
                          className={`text-3xl font-bold uppercase`}
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

                  {/* График (с заливкой) */}
                  <div className="mt-4">
                    <ResponsiveContainer width="100%" height={150}>
                      <AreaChart
                        data={coin.sparkline_in_7d.price.map((price, i) => ({
                          price,
                          i,
                        }))}
                        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
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
                          strokeWidth={2}
                          fill={`url(#color${coin.id})`}
                          dot={false}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Кнопка с анимацией */}
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
