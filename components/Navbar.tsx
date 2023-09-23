"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MainButton from "./MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Variants for stagger effect
  const containerVariants = {
    open: {
      transition: { staggerChildren: 0.5, delayChildren: 0.3 },
    },
    closed: {},
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: {
          duration: 0.5,
          ease: "linear",
          type: "spring",
          damping: 6,
          stiffness: 100,
        },
        opacity: {
          duration: 0.5,
          ease: "linear",
        },
      },
    },
    closed: { x: 50, opacity: 0 },
  };

  return (
    <header className="bg-light-background dark:bg-dark-background p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-light-text dark:text-dark-text font-serif text-3xl">
          Simon Lange
        </Link>

        {/* Burger Menu (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <motion.ul
          variants={containerVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } md:flex dark:bg-dark-background w-full md:w-auto   bg-light-background transition duration-300 absolute md:static left-0 top-0 h-full pt-40 md:pt-0  flex-col md:flex-row  space-x-0 md:space-x-10 items-end md:items-center`}>
          {/* Desktop Links */}
          <li className="hidden md:block">
            <Link className="desktop-links" href="#about">
              About
            </Link>
          </li>
          <li className="hidden md:block">
            <Link className="desktop-links" href="#about">
              Experiences
            </Link>
          </li>
          <li className="hidden md:block">
            <Link className="desktop-links" href="#about">
              Projects
            </Link>
          </li>
          <li className="hidden md:block">
            <Link className="desktop-links" href="#about">
              Github
            </Link>
          </li>

          {/* Mobile Links */}
          <li className="block md:hidden">
            <Link href="#about" className="mobile-links">
              <motion.div variants={itemVariants}>About</motion.div>
            </Link>
          </li>

          <li className="block md:hidden">
            <Link href="#experiences" className="mobile-links">
              <motion.div variants={itemVariants}>Experiences</motion.div>
            </Link>
          </li>

          <li className="block md:hidden">
            <Link href="#projects" className="mobile-links">
              <motion.div variants={itemVariants}>Projects</motion.div>
            </Link>
          </li>
          <li className="block md:hidden">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mobile-links">
              <motion.div variants={itemVariants}>Github</motion.div>
            </a>
          </li>

          {/* Resume Button */}

          <MainButton label="Resume" href="/resume" className="!absolute md:!relative bottom-10 right-10 md:bottom-auto md:right-auto" />

          {/* Mobile Menu Close Button */}
          <div className="md:hidden absolute top-10 right-9">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Socials Mobile Menu */}
          <li className="md:hidden block">
            <ul className="absolute bottom-12 left-10 flex gap-x-7">
              <li>
                <a href="https://linkedin.com/in/simon-larsen-lange-ab5867213" target="_blank" rel="noopener noreferrer" className="group md:hidden">
                  <FontAwesomeIcon className="text-2xl group-hover:text-[#0072b1] transition duration-150" icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/simonllange" target="_blank" rel="noopener noreferrer" className="group md:hidden">
                  <FontAwesomeIcon className="text-2xl group-hover:text-[#962fbf] transition duration-150" icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="mailto:simonllange@gmail.com" className="group md:hidden">
                  <FontAwesomeIcon className="text-2xl group-hover:text-[#DB4437] transition duration-150" icon={faGoogle} />
                </a>
              </li>
            </ul>
          </li>
        </motion.ul>
      </div>
    </header>
  );
};

export default Navbar;
