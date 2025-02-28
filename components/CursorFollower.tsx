"use client";
import React, { useEffect, useState } from "react";

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [color, setColor] = useState("bg-violet-500");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });

      // Check the computed cursor style of the element under the pointer
      const cursorType = window.getComputedStyle(
        event.target as HTMLElement
      ).cursor;

      if (cursorType === "pointer") {
        setScale(2.7);
        setColor("bg-transparent");
      } else {
        setScale(1);
        setColor("bg-violet-500");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`z-50 fixed top-0 left-0 w-8 h-8 ${color} opacity-30 rounded-full border border-violet-700 pointer-events-none transition-transform duration-300 ease-out`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
      }}
    />
  );
};

export default CursorFollower;
