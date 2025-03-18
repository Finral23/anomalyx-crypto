interface Props {
  heading: string;
  title: string;
}

const HeroTitle = ({ heading, title }: Props) => {
  return (
    <div className="hidden md:flex flex-col items-center justify-center text-gray-400 gotham">
      <p className="text-5xl font-light">{heading}</p>
      <p className="text-2xl font-light">{title}</p>
    </div>
  );
};

export default HeroTitle;
