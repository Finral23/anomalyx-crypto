import HeroButton from "./HeroButton";
import HeroTitle from "./HeroTitle";

const HeroInfo = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center gap-15 justify-around">
      <HeroTitle heading="52M+" title="Total profit" />
      <HeroTitle heading="3,2B+" title="Market size" />
      <HeroButton />
      <HeroTitle heading="1K+" title="Clients" />
      <HeroTitle heading="228K" title="Transactions" />
    </div>
  );
};

export default HeroInfo;
