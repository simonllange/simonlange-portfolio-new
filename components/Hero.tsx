"use client";
import Image from "next/image";
import simonLange from "@/public/simonllange.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import projectImage from "@/public/blog-pen.jpg";
import learningImage from "@/public/paper-mac.jpg";
import blogImage from "@/public/macbook-coffee.jpg";
import MainButton from "@/components/MainButton";

const Hero: React.FC = () => {
  const [notificationCount, setNotificationCount] = useState<number>(3);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const [checkedNotifications, setCheckedNotifications] = useState<number[]>([]);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

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
      description: "Just launched my new e-commerce platform. Built with React and Next.js!",
      avatar: projectImage,
    },
    {
      id: 2,
      title: "New Blog Post: ✍️",
      description: "Dive deep into the intricacies of React's new Concurrent Mode. Learn how it can boost your app's performance.",
      avatar: blogImage,
    },
    {
      id: 3,
      title: "Learning Update: 📘",
      description: "Currently exploring the world of Three.js. Excited to integrate 3D visuals into my projects!",
      avatar: learningImage,
    },
  ];

  const handleMouseEnter = () => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowMenu(false);
    }, 850); // 2 seconds delay before hiding the menu
    setMenuTimeout(timeout);
  };

  const toggleCheck = (id: number) => {
    if (checkedNotifications.includes(id)) {
      setCheckedNotifications((prev) => prev.filter((item) => item !== id));
      setNotificationCount((prev) => prev + 1);
    } else {
      setCheckedNotifications((prev) => [...prev, id]);
      setNotificationCount((prev) => prev - 1);
    }
  };

  const unmarkAllNotifications = () => {
    setCheckedNotifications([]);
    setNotificationCount(notifications.length);
  };

  return (
    <div className="flex h-screen border-b border-b-red-500">
      <div className="flex w-full">
        {/* Left Side - Text */}
        <div className="flex-1 flex flex-col justify-start pt-32 items-start gap-3">
          <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-slate-200">Simon Lange</h1>
          <p className="text-xl">Front-end Developer</p>
          <p className="max-w-sm text-slate-400 leading-normal">
            I build accessible, great designed products and digital experiences for the web.
            <br />I am currently working for{" "}
            <a
              data-hover="Bellcom."
              className="test-link relative inline-block text-white font-semibold transition duration-100"
              href="https://bellcom.dk">
              Bellcom.
            </a>
          </p>
          <ul className="flex gap-6 items-center mt-6">
            <li>
              <a href="https://linkedin.com/in/simon-larsen-lange-ab5867213" target="_blank" rel="noopener noreferrer" className="group">
                <FontAwesomeIcon className="text-slate-500 text-2xl group-hover:text-[#0072b1] transition duration-150" icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/simonllange" target="_blank" rel="noopener noreferrer" className="group">
                <FontAwesomeIcon className="text-slate-500 text-2xl group-hover:text-[#962fbf] transition duration-150" icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="mailto:simonllange@gmail.com" className="group">
                <FontAwesomeIcon className="text-slate-500 text-2xl group-hover:text-[#DB4437] transition duration-150" icon={faGoogle} />
              </a>
            </li>
            <li>
              <a href="https://github.com/simonllange" target="_blank" rel="noopener noreferrer" className="group">
                <FontAwesomeIcon className="text-slate-500 text-2xl group-hover:text-slate-200 transition duration-150" icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center items-start pt-28 rounded-full relative">
          <div className="relative">
            <Image
              width="300"
              src={simonLange}
              alt="Descriptive Alt Text"
              className="max-w-full object-cover bg-left h-[300px] rounded-full shadow-lg"
            />

            {notificationCount > 0 && (
              <div
                className="absolute w-[45px] bottom-5 h-[45px] left-5 p-2 rounded-full hover:bg-red-800 transition duration-200 delay-75 bg-red-500 border-2 border-white shadow-sm flex items-center justify-center text-white cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {notificationCount}
                <motion.div
                  initial={{ opacity: 0, x: "-55%", y: "50%" }}
                  animate={showMenu ? { opacity: 1, x: "-60%", y: "60%" } : { opacity: 0, x: "-55%", y: "50%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`absolute mt-2 w-[500px] rounded-lg overflow-hidden bg-white  ${
                    showMenu ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  {/* Example notifications */}
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 ${notification.id !== notifications.length ? "border-b" : ""} ${
                        checkedNotifications.includes(notification.id) ? "bg-gray-100" : ""
                      } hover:bg-gray-100 relative cursor-pointer text-slate-900`}
                      onClick={() => {
                        toggleCheck(notification.id);
                      }}>
                      <div className="absolute top-2 right-5 flex items-center gap-2">
                        <p className="text-slate-500 text-xs">Mark as read:</p>
                        <div
                          className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                            checkedNotifications.includes(notification.id) ? "bg-green-500" : ""
                          }`}>
                          {checkedNotifications.includes(notification.id) && <span className="text-xs text-white">✓</span>}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={notification.avatar}
                          alt="Avatar"
                          width={50}
                          height={70}
                          className="rounded-full shadow-md shadow-slate-900 h-[50px] mr-3"
                        />
                        <div>
                          <h4 className="font-bold text-slate-900">{notification.title}</h4>
                          <p className="text-sm text-slate-600 max-w-[80%]">{notification.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
          {checkedNotifications.length === notifications.length && (
            <MainButton
              label="Unmark notifications"
              onClick={unmarkAllNotifications}
              className="absolute top-0 right-0 before:bg-slate-400 mt-4  !bg-white !text-slate-900 px-4 py-2 rounded"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
