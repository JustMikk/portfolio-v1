"use client";
import React, { useEffect, useState } from "react";

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [color, setColor] = useState("bg-green-500");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event: MouseEvent) => {
      if ((event.target as HTMLElement).style.cursor === "pointer") {
        setScale(1.5);
        setColor("bg-red-500");
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      if ((event.target as HTMLElement).style.cursor === "pointer") {
        setScale(1);
        setColor("bg-green-500");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 ${color} opacity-30 rounded-full pointer-events-none transition-transform duration-500 ease-out`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
      }}
    />
  );
};

export default CursorFollower;
