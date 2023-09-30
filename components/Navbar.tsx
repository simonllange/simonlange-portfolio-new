"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MainButton from "./MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About", href: "/about", isInternal: true },
    { label: "Experiences", href: "/experiences", isInternal: true },
    { label: "Projects", href: "/projects", isInternal: true },
    { label: "Github", href: "https://github.com/simonllange", isInternal: false },
  ];

  // Variants for stagger effect
  const containerVariants = {
    open: {
      transition: { staggerChildren: 0.5, delayChildren: 0.3 },
    },
    closed: {},
  };

  const linkVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
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
    <header className=" bg-transparent py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.div variants={linkVariants} initial="hidden" animate="visible">
          <Link href="/" className="text-slate-200 tracking-tighter font-serif text-3xl">
            simon.
          </Link>
        </motion.div>

        {/* Burger Menu (visible on small screens) */}
        <motion.div variants={linkVariants} initial="hidden" animate="visible" className="md:hidden text-slate-200">
          <button className="group  flex flex-col gap-[5px] items-end" onClick={() => setIsOpen(!isOpen)}>
            <span className="w-5 bg-slate-200 h-px block"></span>
            <span className="w-5 bg-slate-200 h-px block"></span>
            <span className="group-hover:w-5 transition-all duration-300 w-2.5 bg-slate-200 h-px block"></span>
          </button>
        </motion.div>

        {/* Navigation Links */}
        <motion.ul
          variants={containerVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } md:flex w-full md:w-auto md:bg-transparent bg-slate-900 z-50  transition duration-300 absolute md:static left-0 top-0 h-full pt-40 md:pt-0  flex-col md:flex-row  space-x-0 md:space-x-10 items-end md:items-center`}>
          {links.map((link) => (
            <React.Fragment key={link.label}>
              <li key={link.label + "-desktop"} className="hidden md:block">
                {link.isInternal ? (
                  <Link href={link.href} className="desktop-links">
                    <motion.span variants={linkVariants} initial="hidden" animate="visible">
                      {link.label}
                    </motion.span>
                  </Link>
                ) : (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="desktop-links">
                    <motion.span variants={linkVariants} initial="hidden" animate="visible">
                      {link.label}
                    </motion.span>
                  </a>
                )}
              </li>
              <li key={link.label + "-mobile"} className="block md:hidden">
                {link.isInternal ? (
                  <Link href={link.href} className="mobile-links">
                    <motion.div variants={itemVariants}>{link.label}</motion.div>
                  </Link>
                ) : (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="mobile-links">
                    <motion.div variants={itemVariants}>{link.label}</motion.div>
                  </a>
                )}
              </li>
            </React.Fragment>
          ))}

          {/* Resume Button */}
          <motion.div variants={linkVariants} initial="hidden" animate="visible">
            <MainButton label="Resume" href="/resume" className="!absolute md:!relative bottom-10 right-10 md:bottom-auto md:right-auto" />
          </motion.div>

          {/* Mobile Menu Close Button */}
          <div className="md:hidden absolute top-10 right-9 text-slate-200">
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
                  <FontAwesomeIcon className="text-slate-200 text-2xl group-hover:text-[#0072b1] transition duration-150" icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/simonllange" target="_blank" rel="noopener noreferrer" className="group md:hidden">
                  <FontAwesomeIcon className="text-slate-200 text-2xl group-hover:text-[#962fbf] transition duration-150" icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="mailto:simonllange@gmail.com" className="group md:hidden">
                  <FontAwesomeIcon className="text-slate-200 text-2xl group-hover:text-[#DB4437] transition duration-150" icon={faGoogle} />
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
