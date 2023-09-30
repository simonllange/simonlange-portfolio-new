import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface MainButtonProps {
  label?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const MainButton: React.FC<MainButtonProps> = ({ label, href, external = false, onClick, className = "", children }) => {
  const baseClass = "custom-btn";
  const combinedClass = `${baseClass} ${className}`;
  const buttonContent = (
    <motion.button
      className={combinedClass}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}>
      {label || children}
    </motion.button>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          className={combinedClass}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          {label || children}
        </motion.a>
      );
    } else {
      return <Link href={href}>{buttonContent}</Link>;
    }
  }

  return buttonContent;
};

export default MainButton;
