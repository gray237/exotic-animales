import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "YouTube",
    href: "https://www.youtube.com/@ExoticAnimales",
    icon: <Youtube className="w-5 h-5" />,
    color: "hover:bg-red-500 hover:text-white",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/home",
    icon: <Facebook className="w-5 h-5" />,
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    title: "X (Twitter)",
    href: "https://x.com/yourhandle",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M4 4l11.733 16h4.267l-11.733-16z" />
        <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
      </svg>
    ),
    color: "hover:bg-black hover:text-white",
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@exoticanimalesranch",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
    color: "hover:bg-zinc-900 hover:text-white",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/exoticanimales/",
    icon: <Instagram className="w-5 h-5" />,
    color: "hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:text-white",
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider delayDuration={0}>
      <div className={cn("flex items-center gap-3", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  `
                  p-1.5 flex items-center justify-center
                  bg-gray-100/50 dark:bg-white/5 
                  text-gray-600 dark:text-gray-400
                  rounded-lg border border-transparent
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-lg
                  `,
                  item.color,
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className={cn(
                "bg-zinc-900 text-white border-none text-xs px-3 py-1.5 rounded-lg shadow-xl",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;