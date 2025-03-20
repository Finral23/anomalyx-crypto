interface Props {
  number: string;
  title: string;
  hasBorder?: boolean; // Определяем, нужен ли бордер (только для десктопа)
}

const HowToStep = ({ number, title, hasBorder = false }: Props) => {
  return (
    <div
      className={`flex flex-col items-start text-[#7ad95f] p-6 
          ${
            hasBorder
              ? "sm:border-r sm:border-[#7ad95f] border-b border-[#7ad95f] sm:border-b-0 md:border-b-0"
              : ""
          } 
          `} // Бордер только между шагами на мобилках
    >
      <span className="text-6xl md:text-9xl font-bold text-outline pb-6">
        {number}
      </span>
      <p className="mt-2 text-base md:text-lg text-start font-light uppercase">
        {title}
      </p>
    </div>
  );
};

export default HowToStep;
