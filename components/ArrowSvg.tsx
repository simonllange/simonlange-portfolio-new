interface ArrowProps {
  delay?: number;
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ delay = 0, className }) => {
  const baseDelay = `${delay}s`;
  const tail1Delay = `${delay + 0.5}s`;
  const tail2Delay = `${delay + 0.7}s`;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 43.1 85.9"
      enableBackground="new 0 0 43.1 85.9"
      xmlSpace="preserve"
      className={`arrow-svg ${className}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="st0 draw-arrow"
        style={{ animationDelay: baseDelay }}
        d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="draw-arrow tail-1"
        style={{ animationDelay: tail1Delay }}
        d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="draw-arrow tail-2"
        style={{ animationDelay: tail2Delay }}
        d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
      />
    </svg>
  );
};

export default Arrow;
