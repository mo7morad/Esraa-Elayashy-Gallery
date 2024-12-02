"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const DotCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-100 ease-out ${
        theme === "dark" ? "bg-white/80" : "bg-black/80"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};
