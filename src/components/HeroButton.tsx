import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";

const HeroButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Левые и правые точки */}
      <motion.div
        className="hidden sm:block absolute left-[-52px] w-3 h-3 bg-green rounded-full "
        animate={isHovered ? { x: 15 } : { x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.div
        className="hidden sm:block absolute right-[-52px] w-3 h-3 bg-green rounded-full"
        animate={isHovered ? { x: -15 } : { x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Левые и правые линии */}
      <motion.div
        className="hidden sm:block absolute left-[-100px] w-12 h-[2px] bg-gradient-to-r from-[#7ad95f]/0 to-[#7ad95f]"
        animate={isHovered ? { x: 15 } : { x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.div
        className="hidden sm:block absolute right-[-100px] w-12 h-[2px] bg-gradient-to-l from-[#7ad95f]/0 to-[#7ad95f]"
        animate={isHovered ? { x: -15 } : { x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Кнопка (из ShadCN UI) */}
      <Button size="lg">Join the Club</Button>
    </div>
  );
};

export default HeroButton;
