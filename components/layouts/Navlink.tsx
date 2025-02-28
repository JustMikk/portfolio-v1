import { IconType } from "react-icons";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  link: string;
  icon: IconType;
};

export default function Navlink({ title, link, icon: Icon }: Props) {
  return (
    <div className="group hover:text-violet-600 dark:border-neutral-800 border-neutral-300 border bg-transparent backdrop-blur rounded-2xl flex justify-center items-center transition">
      <Link href={link} className="w-full">
        <div className="p-1 lg:p-3 px-5 rounded-sm flex justify-center items-center">
          <Icon
            size={15}
            className="text-black dark:text-white self-center group-hover:text-violet-600"
          />
          <p className="text-black dark:text-white ml-1 text-sm lg:text-md self-center group-hover:text-violet-600">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
}
