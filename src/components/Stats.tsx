import StatsText from "./StatsText";

export function Stats() {
  return (
    <div className="flex justify-center max-w-5xl w-full py-10">
      <div className="bg-green rounded-4xl p-10 w-full flex flex-col sm:flex-row items-center justify-between gap-5 md:gap-10">
        <StatsText heading="+700" title="Active users per month" />
        <StatsText heading="+12.1M" title="Profit per mount" />
        <StatsText heading="96.9%" title="Percentage of closed futures" />
      </div>
    </div>
  );
}
