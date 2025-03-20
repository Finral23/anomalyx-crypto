interface Props {
  heading: string;
  title: string;
}
const StatsText = ({ heading, title }: Props) => {
  return (
    <div className="text-center text-[#282828]">
      <span className="text-4xl md:text-5xl font-semibold">{heading}</span>
      <p className="text-md md:text-lg font-semibold">{title}</p>
    </div>
  );
};

export default StatsText;
