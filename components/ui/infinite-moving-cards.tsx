"use client";

import { cn } from "@/lib/utils";
import { MdStarRate } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (scrollerRef.current) {
      const scroller = scrollerRef.current;
      const items = Array.from(scroller.children);

      // Duplicate items for smooth looping
      items.forEach((item) => {
        const clonedItem = item.cloneNode(true);
        scroller.appendChild(clonedItem);
      });

      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full max-w-6xl overflow-hidden", className)}
    >
      <div
        className="flex flex-nowrap w-full"
        style={{
          display: "flex",
          gap: "1rem",
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        }}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex flex-nowrap gap-4 py-10 animate-scroll",
            start &&
              `animate-scroll ${
                direction === "left" ? "scroll-left" : "scroll-right"
              }`,
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 bg-gradient-to-t from-violet-300 to-violet-200 dark:from-neutral-900 dark:to-neutral-800 px-6 py-6"
            >
              <blockquote>
                <div className="flex items-center gap-2 pb-4">
                  <IoPersonCircleSharp className="w-10 h-10 dark:text-violet-500 text-neutral-700" />
                  <span className="text-lg dark:text-violet-100 font-medium">
                    {item.name}
                  </span>
                </div>
                <span className="text-sm text-gray-400">{item.title}</span>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {item.quote}
                </p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <MdStarRate key={i} className="w-5 h-5 text-violet-500" />
                  ))}
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
