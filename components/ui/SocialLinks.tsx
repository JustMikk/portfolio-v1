import { useRouter } from "next/navigation";
import React from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitterX,
} from "react-icons/bs";
import { SocialLinks as socials } from "@/lib/constants";

type Props = {};

export default function SocialLinks({}: Props) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-3">
      {socials.map(({ component: IconComponent, link, key }) => (
        <div
          key={key}
          className="border rounded-full p-2 dark:border-neutral-700 border-neutral-400"
        >
          <IconComponent
            onClick={() => window.open(link, "_blank")}
            key={key}
            className="hover:text-violet-500 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}
