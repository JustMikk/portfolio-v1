import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  images: string[];
  link: string;
};

export default function ProjectCard({
  title,
  description,
  images,
  link,
}: CardProps) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg border border-neutral-800 hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={images[0]}
        alt={title}
        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{description}</p>

        {/* External Link */}
        <Link href={link} target="_blank">
          <button className="mt-3 flex items-center gap-2 px-4 py-2 text-white border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
            View Project <FaExternalLinkAlt />
          </button>
        </Link>
      </div>
    </div>
  );
}
