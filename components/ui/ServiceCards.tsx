import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import {
  ChartNoAxesCombined,
  Code2,
  PenTool,
  ServerCogIcon,
  TabletSmartphone,
} from "lucide-react";

export function ServiceCards() {
  const features = [
    {
      title: "Frontend Development",
      description:
        "Expert in building dynamic and scalable web applications with high performance using Next JS, React JS and Tailwind CSS.",
      icon: <Code2 />,
    },
    {
      title: "Backend Development",
      description:
        "Create robust and efficient server-side applications with Express, Hono, Postgres and Prisma.",
      icon: <ServerCogIcon />,
    },
    {
      title: "Mobile App Development",
      description:
        "Experienced in developing user-friendly and responsive mobile apps use React Native and Expo.",
      icon: <TabletSmartphone />,
    },
    {
      title: "UI/UX Design",
      description:
        "Proficent in crafting stunning product designs and experiences.",
      icon: <PenTool />,
    },
    {
      title: "Search Engine Optimization",
      description:
        "Skilled in improving in search engine rankings and visibility.",
      icon: <ChartNoAxesCombined />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-14 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-violet-500">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-violet-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 text-xl dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-neutral-600 text-lg dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
