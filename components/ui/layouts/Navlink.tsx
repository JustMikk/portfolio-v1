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
    <div className=" border-neutral-700 border rounded-3xl">
      <Link href={link}>
        <div className="p-3 lg:p-5 px-7 rounded-sm flex justify-center items-center">
          <Icon size={18} className="text-white self-center" />
          <p className="text-white ml-2 text-lg lg:text-xl self-center">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
}
