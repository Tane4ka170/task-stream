"use client";

import { useTheme } from "next-themes";
import Navbar from "./Components/navbar/Navbar";

export default function Home() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-50";
  return (
    <div className={`${bgColor} border min-h-screen w-full`}>
      <Navbar />
      <div className="grid grid-cols-[3fr_1fr] px-6 mt-8 gap-4">
        <ProjectsArea />
      </div>
    </div>
  );
}
