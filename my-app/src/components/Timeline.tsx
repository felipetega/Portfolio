'use client'

import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 h-screen w-2 bg-gray-300">
      <div
        className="h-full bg-blue-500"
        style={{ height: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="relative">
      <ProgressBar />
      <div>
        <p className="text-xl font-medium mb-2">FATEC 08/2022</p>
        <p className="text-xl font-medium mb-2">Digital Innovation One 06/2022</p>
        <p className="text-xl font-medium mb-2">Curso em vídeo 04/2022</p>
      </div>
    </div>
  );
};

export default Timeline;
