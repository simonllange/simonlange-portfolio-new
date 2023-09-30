import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface HeadlineProps {
  title: string;
  delay?: number;
  className?: string;
  textColor?: string;
  size?: number;
  textSize?: number;
}

const Headline: React.FC<HeadlineProps> = ({ title, delay = 0, className, textColor, size = 1, textSize }) => {
  const controls = useAnimation();
  const scale = (30 * title.length) / 240;
  const stroke = 3 / scale;

  const baseViewBoxWidth = 43.1;
  const baseViewBoxHeight = 85.9;
  const viewBox = `0 0 ${baseViewBoxWidth / size} ${baseViewBoxHeight / size}`;

  useEffect(() => {
    controls.start({ opacity: 1 }).then(() => {
      document.querySelector(".stroke")?.classList.add("animate-stroke");
    });
  }, [controls]);

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ delay: delay, duration: 0.5 }}
      className={`headline-svg-text ${className}`}
      viewBox={viewBox}
      width="100%"
      height="150"
      aria-hidden="true">
      <text x="0" y="0" dy="1em" fill={textColor || "currentColor"} fontSize={textSize || "1em"}>
        {title}
      </text>
      <path
        className="stroke"
        style={{ transform: `translateY(1em) scale(${scale})` }}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6"
      />
    </motion.svg>
  );
};

export default Headline;
