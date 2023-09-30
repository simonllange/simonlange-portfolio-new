import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Simon Lange - Front-end Developer from Kolding, Denmark.",
  description:
    "Simon Lange, a front-end developer from Denmark, specializes in crafting exceptional web designs and digital experiences. With a deep passion for web development and design, Simon delivers innovative solutions tailored for the modern web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-900 overflow-hidden container mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
