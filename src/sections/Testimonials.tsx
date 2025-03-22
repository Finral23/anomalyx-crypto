import { useState } from "react";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";
import { useInView } from "react-intersection-observer";

// Данные отзывов
const testimonials = [
  {
    name: "Michael Grishanov",
    title: "our site creator",
    text: "I've tried manual trading before, and it was stressful. AI Trade removes the emotional aspect of trading, making smart decisions based on real data.",
    image: "/testimonials/Grisha.webp",
  },
  {
    name: "Dmitry Manov",
    title: "Donbass founder",
    text: "I had zero experience with crypto, but this bot made everything so easy! The automated trades are spot on, and I don't have to spend hours analyzing charts.",
    image: "/testimonials/Dima.webp",
  },
  {
    name: "Vladislav Sweetcockskiy",
    title: "Crypto Enthusiast",
    text: "What I love about AI Trade is that it charges no fees. You deposit, set your strategy, and the bot handles the rest.",
    image: "/testimonials/Vlad.webp",
  },
  {
    name: "Valera Sukhomlin",
    title: "Financial Advisor",
    text: "I was skeptical at first, but this trading AI surprised me. The analytics and automation are top-notch. Highly recommend!",
    image: "/testimonials/Valera.webp",
  },
  {
    name: "Igor Pivovaroff",
    title: "Stock Trader",
    text: "I've been trading stocks for years, and this crypto bot feels like the future. No emotions, only data-driven decisions.",
    image: "/testimonials/Igor.webp",
  },
  {
    name: "Michael Chveckson",
    title: "Investor",
    text: "Diversifying my portfolio was never this easy! AI Trade makes everything seamless, and I can focus on bigger things.",
    image: "/testimonials/Michael.webp",
  },
];

const Testimonials = () => {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  // Настройки слайдера
  const settings = {
    dots: false,
    infinite: true, // Бесконечный скролл
    speed: 500,
    slidesToShow: 3, // Показываем 3 отзыва одновременно
    slidesToScroll: 1, // Листаем по одному
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Отключаем встроенные стрелки
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    beforeChange: (_: number, newIndex: number) => setActiveIndex(newIndex), // Обновляем активный индекс
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // На планшетах 2 отзыва
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // На телефонах 1 отзыв
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="w-full mx-auto text-center pb-10 relative"
    >
      {/* Заголовок */}
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <Heading>100% SATISFIED INVESTORS WORLDWIDE</Heading>
      </div>

      {/* Блок изображений */}
      <div className="relative flex justify-center items-center mt-10">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
              className={`size-60 md:size-100 object-cover transition-all duration-500 ${
                activeIndex === index ? "brightness-100" : "brightness-50"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Блок отзывов */}
      <div className="relative mt-10 w-full">
        <Slider ref={(c) => setSlider(c)} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`text-start text-lg px-6 py-6 md:pr-10 lg:pr-40 rounded-lg transition-all duration-300 flex flex-col justify-between ${
                activeIndex === index ? "text-gray-200" : "text-[#424242]"
              }`}
            >
              <p>"{testimonial.text}"</p>
              <span className="block mt-4 italic text-[#424242]">
                {testimonial.name}, {testimonial.title}
              </span>
            </div>
          ))}
        </Slider>
      </div>

      {/* Навигационные кнопки */}
      <div className="flex justify-start items-center gap-4 px-6">
        <Button
          size="icon"
          variant="outline"
          onClick={() => slider?.slickPrev()}
        >
          ←
        </Button>
        <span className="text-[#7ad95f] italic ">
          {activeIndex + 1}/{testimonials.length}
        </span>
        <Button
          size="icon"
          variant="outline"
          onClick={() => slider?.slickNext()}
        >
          →
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
