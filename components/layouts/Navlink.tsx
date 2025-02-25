import { Icon, LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  title: string;
  link: string;
  icon: IconType;
};

export default function Navlink({ title, link, icon: Icon }: Props) {
  return (
    <div className=" dark:border-neutral-800 border-neutral-300 border rounded-2xl flex justify-center items-center ">
      <Link href={link} className="">
        <div className="p-1 lg:p-3 px-5 rounded-sm flex justify-center items-center hover:text-green-600">
          <Icon size={15} className="text-black dark:text-white self-center" />
          <p className="text-black dark:text-white ml-1 text-sm lg:text-md self-center">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
}
