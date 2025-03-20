import { useEffect, useState } from "react";

// Определяем тип данных для криптовалют
export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_1h: number;
  sparkline: number[];
};

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h";

export function useCryptoData() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);

        if (res.status === 401)
          throw new Error("Unauthorized API access (401)");
        if (res.status === 429)
          throw new Error("Too Many Requests (429) - Slow down!");

        const data = await res.json();

        const updatedCoins = data.map((coin: any) => ({
          id: coin.id,
          symbol: coin.symbol,
          name: coin.name,
          image: coin.image,
          current_price: coin.current_price,
          price_change_1h: coin.price_change_percentage_1h_in_currency || 0,
          sparkline: coin.sparkline_in_7d?.price || [],
        }));

        setCoins(updatedCoins);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);

        // 🔥 Проверяем тип ошибки и получаем `message`
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }

        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  return { coins, loading, error };
}
