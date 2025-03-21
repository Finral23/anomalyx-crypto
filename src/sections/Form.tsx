import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });

  return (
    <section id="contact" className="max-w-4xl mx-auto pb-20 text-center">
      {/* Заголовок */}
      <div
        ref={ref1}
        className={`transition-all duration-700 ease-in-out ${
          inView1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Heading>Do you want to become part of the future</Heading>
      </div>

      {/* Форма */}
      <div
        ref={ref2}
        className={`transition-all duration-700 ease-in-out ${
          inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <form
          className="flex flex-col md:flex-row gap-2 mx-5 sm:mx-20 md:mx-0 mt-10 items-center justify-center"
          onSubmit={(e) => e.preventDefault()} // Отключаем реальную отправку
        >
          {/* Поле "Имя" */}
          <div className="relative w-full md:w-1/3">
            <label className="absolute -top-5 left-4 px-2 text-2xl font-light text-gray-300 bg-[#0d0d0d]">
              name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              minLength={3}
              maxLength={25}
              className="w-full bg-transparent border-2 text-2xl border-[#7ad95f] rounded-md p-4 text-gray-300 focus:outline-none focus:border-white"
            />
          </div>
          {/* Поле "Email" */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={25}
            placeholder="E-mail"
            className="w-full md:w-1/3 bg-transparent border-2 text-2xl border-[#7ad95f] rounded-md p-4 text-gray-300 focus:outline-none focus:border-white"
          />
          {/* Кнопка "Send" */}
          <Button
            type="submit"
            className="w-full md:w-50 h-17 font-semibold text-2xl rounded-md shadow-none hover:bg-[#66c754]"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Form;
