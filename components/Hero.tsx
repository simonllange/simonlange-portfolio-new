"use client";
import Image from "next/image";
import simonLange from "@/public/simonllange.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBell, faCheck, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectImage from "@/public/blog-pen.jpg";
import learningImage from "@/public/paper-mac.jpg";
import blogImage from "@/public/macbook-coffee.jpg";
import MainButton from "@/components/MainButton";
import Arrow from "@/components/ArrowSvg";
import Headline from "@/components/Headline";

const Hero: React.FC = () => {
  // useStates

  const [notificationCount, setNotificationCount] = useState<number>(3);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [checkedNotifications, setCheckedNotifications] = useState<number[]>([]);
  const [screenSize, setScreenSize] = useState<ScreenSize>("large");
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Framer motion variants

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const getAnimationProps = (): {
    initial: { opacity: number; x: string | number; y: string | number };
    animate: { opacity: number; x: string | number; y: string | number };
  } => {
    switch (screenSize) {
      case "xsmall":
        return {
          initial: { opacity: 0, x: "-50%", y: "50%" },
          animate: showMenu ? { opacity: 1, x: "-50%", y: "55%" } : { opacity: 0, x: "-50%", y: "50%" },
        };
      case "small":
        return {
          initial: { opacity: 0, x: "-20%", y: "80%" },
          animate: showMenu ? { opacity: 1, x: "-20%", y: "85%" } : { opacity: 0, x: "-20%", y: "80%" },
        };
      case "medium":
        return {
          initial: { opacity: 0, x: "-38%", y: "65%" },
          animate: showMenu ? { opacity: 1, x: "-38%", y: "70%" } : { opacity: 0, x: "-38%", y: "65%" },
        };
      case "large":
        return {
          initial: { opacity: 0, x: -"55%", y: "50%" },
          animate: showMenu ? { opacity: 1, x: "-67%", y: "55%" } : { opacity: 0, x: "-55%", y: "50%" },
        };
      default: // xlarge
        return {
          initial: { opacity: 0, x: "-55%", y: "60%" },
          animate: showMenu ? { opacity: 1, x: "-60%", y: "65%" } : { opacity: 0, x: "-55%", y: "60%" },
        };
    }
  };

  const animationProps = getAnimationProps();

  // Screensize logic

  type ScreenSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("xsmall");
      } else if (window.innerWidth < 768) {
        setScreenSize("small");
      } else if (window.innerWidth < 1024) {
        setScreenSize("medium");
      } else if (window.innerWidth < 1280) {
        setScreenSize("large");
      } else {
        setScreenSize("xlarge");
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // initial check

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Notifications

  type Notification = {
    id: number;
    title: string;
    description: string;
    avatar: any;
  };
  const notifications: Notification[] = [
    {
      id: 1,
      title: "Latest Project: 🚀",
      description: "Just launched my new portfolio. Built with Next.js, TypeScript, TailwindCSS and Framer Motion!",
      avatar: projectImage,
    },
    {
      id: 2,
      title: "New Blog Post: ✍️",
      description: "Dive deep into the intricacies of React's new Concurrent Mode. Head over to the blog from the navigation menu.",
      avatar: blogImage,
    },
    {
      id: 3,
      title: "Learning Update: 📘",
      description:
        "Currently learning more about Next.js 13. Excited to create digital experiences through one the most modern frameworks out there.",
      avatar: learningImage,
    },
  ];

  const allNotificationsRead = checkedNotifications.length === notifications.length;
  const noNotificationsRead = checkedNotifications.length === 0;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleCheck = (event: React.MouseEvent, id: number) => {
    event.stopPropagation(); // Stop the event from propagating to parent elements

    if (checkedNotifications.includes(id)) {
      setCheckedNotifications((prev) => prev.filter((item) => item !== id));
      setNotificationCount((prev) => prev + 1);
    } else {
      setCheckedNotifications((prev) => [...prev, id]);
      setNotificationCount((prev) => prev - 1);
    }
  };

  const markAllNotificationsAsRead = () => {
    setCheckedNotifications(notifications.map((n) => n.id));
    setNotificationCount(0);
  };

  const unmarkAllNotifications = () => {
    setCheckedNotifications([]);
    setNotificationCount(notifications.length);
  };

  const DropdownMenu: React.FC = () => (
    <div>
      <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <button
          onClick={markAllNotificationsAsRead}
          className={`text-left min-h-[40px] border-b border-slate-200 transition duration-150 items-center text-sm text-gray-700 hover:bg-gray-100 w-full flex gap-1 ${
            allNotificationsRead ? "opacity-30 cursor-not-allowed" : ""
          }`}
          disabled={allNotificationsRead}>
          <div className="w-[15%] flex  justify-center items-center">
            <div className="h-full">
              <FontAwesomeIcon className="text-[14px]" icon={faCheck} />
            </div>
          </div>
          <span className="h-full">Mark all as read</span>
        </button>
        <button
          onClick={unmarkAllNotifications}
          className={`text-left min-h-[40px] border-b border-slate-200 items-center text-sm text-gray-700 transition duration-150 hover:bg-gray-100 w-full flex gap-1 ${
            noNotificationsRead ? "opacity-30 cursor-not-allowed" : ""
          }`}
          disabled={noNotificationsRead}>
          <div className="w-[15%] flex  justify-center items-center">
            <div className="h-full">
              <FontAwesomeIcon className="text-[14px]" icon={faEnvelopeOpenText} />
            </div>
          </div>
          <span className="h-full">Mark all as unread</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen border-b border-b-red-500">
      <div className="flex w-full relative gap-10 flex-col-reverse sm:flex-row">
        <Arrow
          delay={3}
          className="absolute !w-[50px] !h-[50px] xl:!w-[70px] xl:!h-[70px] left-[45%] sm:left-[75%] md:left-[80%]  lg:left-[50%] xl:left-[52%] top-[45%] sm:top-[52%] lg:top-44 transform -rotate-12 "
        />
        <Headline
          title="Thats me!"
          textColor="#e2e8f0"
          delay={3}
          size={0.25}
          textSize={60}
          className="font-cursive top-[55%] sm:top-[60%] left-[30%] sm:left-[68%] md:left-[73%] lg:left-[30%] xl:left-[40%] lg:top-28 -rotate-[25deg] lg:-rotate-12 w-fit absolute"
        />
        {/* Left Side - Text */}
        <div className="flex-none sm:flex-1 flex flex-col justify-start  sm:pt-32 items-start gap-3">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-slate-200">
            Simon Lange
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={revealVariants} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl">
            Front-end Developer
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-sm text-slate-400 leading-normal">
            I build accessible, great designed products and digital experiences for the web.
            <br />I am currently working for{" "}
            <a
              data-hover="Bellcom."
              className="test-link relative inline-block text-white font-semibold transition duration-100"
              href="https://bellcom.dk">
              Bellcom.
            </a>
          </motion.p>
          <ul className="flex gap-6 items-center mt-6">
            <motion.li initial="hidden" animate="visible" variants={revealVariants} transition={{ duration: 0.5, delay: 0.4 }}>
              <a href="https://linkedin.com/in/simon-larsen-lange-ab5867213" target="_blank" rel="noopener noreferrer" className="group">
                <FontAwesomeIcon className="text-slate-500 text-2xl group-hover:text-[#0072b1] transition duration-150" icon={faLinkedinIn} />
              </a>
            </motion.li>

            <motion.li initial="hidden" animate="visible" variants={revealVariants} transition={{ duration: 0.5, delay: 0.5 }}>
              <a href="https://instagram.com/simonllange" target="_blank" rel="noopener noreferrer" className="group">
                <FontAwesomeIcon className="text-slate-500 text-2xl group-hover:text-[#962fbf] transition duration-150" icon={faInstagram} />
              </a>
            </motion.li>

            <motion.li initial="hidden" animate="visible" variants={revealVariants} transition={{ duration: 0.5, delay: 0.6 }}>
              <a href="mailto:simonllange@gmail.com" className="group">
                <FontAwesomeIcon className="text-slate-500 text-2xl group-hover:text-[#DB4437] transition duration-150" icon={faGoogle} />
              </a>
            </motion.li>

            <motion.li initial="hidden" animate="visible" variants={revealVariants} transition={{ duration: 0.5, delay: 0.7 }}>
              <a href="https://github.com/simonllange" target="_blank" rel="noopener noreferrer" className="group">
                <FontAwesomeIcon className="text-slate-500 text-2xl group-hover:text-slate-200 transition duration-150" icon={faGithub} />
              </a>
            </motion.li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center items-start pt-24 sm:pt-28 rounded-full relative">
          <motion.div initial="hidden" animate="visible" variants={revealVariants} transition={{ duration: 0.5, delay: 0.1 }} className="relative">
            <Image
              width="300"
              src={simonLange}
              alt="Descriptive Alt Text"
              className="max-w-full object-cover bg-left h-[280px] w-[280px]  md:h-[300px] rounded-full shadow-lg"
            />

            <motion.div
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
              }}
              className={`absolute w-[45px] bottom-5 h-[45px] left-6 rounded-full flex items-center justify-center ${
                notificationCount === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <div
                className={`w-full h-[45px] p-2 rounded-full hover:bg-red-800 bg-red-500 border-2 border-white shadow-sm flex items-center justify-center text-white cursor-pointer ${
                  notificationCount === 0 ? "opacity-0" : "opacity-100"
                }`}>
                <span className="font-bold">{notificationCount}</span>
              </div>
              <motion.div
                {...animationProps}
                onClick={(e) => e.stopPropagation()}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`fixed sm:absolute mt-2 left-1/2 sm:left-auto w-[90%] sm:w-[500px] rounded-lg overflow-hidden bg-white  ${
                  showMenu ? "pointer-events-auto" : "pointer-events-none"
                }`}>
                {/* Utility buttons */}
                <div className="flex justify-between items-center border-b p-4">
                  <p className="text-slate-900 font-semibold flex items-center ">
                    Notifications
                    <div className="bg-red-500 w-6 h-6 rounded-md ml-3 flex items-center justify-center">
                      <FontAwesomeIcon className="text-white text-sm" icon={faBell} />
                    </div>
                  </p>
                  <div className="flex items-center gap-4 relative">
                    <AnimatePresence>
                      {isDropdownOpen == true && (
                        <motion.div
                          key="dropdown-menu"
                          variants={dropdownVariants}
                          initial="hidden"
                          exit="hidden"
                          animate={isDropdownOpen ? "visible" : "hidden"}
                          className="absolute right-0 top-8 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <DropdownMenu />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <button
                      onClick={() => setDropdownOpen(!isDropdownOpen)}
                      className="text-slate-900 h-[20px] px-2 hover:text-slate-700 flex items-center gap-1">
                      <span className="bg-slate-400 w-1 h-1 rounded-full block"></span>
                      <span className="bg-slate-400 w-1 h-1 rounded-full block"></span>
                      <span className="bg-slate-400 w-1 h-1 rounded-full block"></span>
                    </button>
                    <button
                      onClick={() => setShowMenu(false)}
                      className="text-slate-900 flex items-center transition duration-150 justify-center hover:bg-gray-100 rounded-full w-8 h-8 hover:text-slate-700">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Example notifications */}
                <div className="max-h-[350px] overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`py-6 px-4 sm:px-4 sm:py-4 ${notification.id !== notifications.length ? "border-b" : ""} ${
                        checkedNotifications.includes(notification.id) ? "bg-gray-100" : ""
                      } hover:bg-gray-100 relative cursor-pointer text-slate-900`}>
                      <button
                        className="absolute top-2 right-5 flex items-center gap-2"
                        onClick={(event) => {
                          toggleCheck(event, notification.id);
                        }}>
                        <p className="text-slate-500 text-[10px] sm:text-xs">Mark as read:</p>
                        <div
                          className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                            checkedNotifications.includes(notification.id) ? "bg-green-500" : ""
                          }`}>
                          {checkedNotifications.includes(notification.id) && <span className="text-xs text-white">✓</span>}
                        </div>
                      </button>
                      <div className="flex items-center">
                        <Image
                          src={notification.avatar}
                          alt="Avatar"
                          width={50}
                          height={70}
                          className="rounded-full shadow-md shadow-slate-900 h-[50px] mr-3"
                        />
                        <div>
                          <h4 className="text-sm sm:text-normal font-bold text-slate-900 ">{notification.title}</h4>
                          <p className="text-[12px] sm:text-sm text-slate-600 max-w-full sm:max-w-[90%]">{notification.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MainButton
              onClick={toggleMenu}
              className="absolute top-0 right-0 before:bg-slate-400 mt-4  !bg-gray-300 !bg-opacity-40 !text-slate-200 text-sm sm:text-normal px-4 py-2 rounded">
              Notifications
              <div className="bg-red-500 w-6 h-6 rounded-md ml-3 flex items-center justify-center">
                <FontAwesomeIcon className="text-white" icon={faBell} />
              </div>
            </MainButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
