"use client";

import { cn } from "@/lib/utils";
import { Quote, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { MdStarRate } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";

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

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative  max-w-6xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-10 py-8 md:w-[480px]"
            style={{
              background:
                "linear-gradient(180deg, var(--neutral-800), var(--neutral-900)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="flex flex-col gap-1 pb-4">
                <div className="flex items-center gap-2">
                  <IoPersonCircleSharp className="w-12 h-12 text-violet-500" />
                  <span className=" text-xl leading-[1.6] text-violet-100 font-medium">
                    {item.name}
                  </span>
                </div>
                <span className=" text-md ml-12 leading-[1.6] text-gray-400 font-normal">
                  {item.title}
                </span>
              </span>

              <span className=" relative z-20 text-md leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-8 flex flex-row items-center justify-between">
                <div className="flex">
                  <MdStarRate className="w-6 h-6 text-violet-500 ml-4" />
                  <MdStarRate className="w-6 h-6 text-violet-500 ml-4" />
                  <MdStarRate className="w-6 h-6 text-violet-500 ml-4" />
                  <MdStarRate className="w-6 h-6 text-violet-500 ml-4" />
                  <MdStarRate className="w-6 h-6 text-violet-500 ml-4" />
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
