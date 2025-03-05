import { Card, CardFooter, Image } from "@heroui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "./button";
import Link from "next/link";

type CardProps = {
  id: number;
  title: string;
  description: string;
  images: string[];
  link: string;
};

export default function ProjectCard({
  id,
  title,
  description,
  images,
  link,
}: CardProps) {
  return (
    <Card className="border-none hover:scale-105 transition-all ease-in-out duration-100 group">
      <Image
        alt={title}
        className="object-cover  h-full w-full"
        height={350}
        src={images[0]}
      />
      <CardFooter className="hidden group-hover:flex justify-between bg-black/60 border-white/40 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ">
        <div>
          <p className="text-lg">{title}</p>
          <p className="text-md text-white/80">{description}</p>
        </div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="text-tiny text-white bg-black/20 hover:bg-white/20 "
          color="default"
        >
          <FaExternalLinkAlt />
        </Link>
      </CardFooter>
    </Card>
  );
}
