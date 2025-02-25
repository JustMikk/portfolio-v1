"use client";
import React, { useEffect, useState } from "react";

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-8 h-8 bg-green-500 opacity-30 rounded-full pointer-events-none transition-transform duration-500 ease-out"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
};

export default CursorFollower;
