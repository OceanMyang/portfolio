import { cn } from "../lib/utils";
import Link from "next/link";
import Image from "next/image";

export interface NavItemProps {
  href: string;
  text?: string;
  className?: string;
}

export interface ImgNavItemProps {
  href: string;
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function Navbar({
  items,
  className,
  itemClassName,
  padding,
  gap,
}: {
  items: NavItemProps[];
  className?: string;
  itemClassName?: string;
  padding?: string;
  gap?: string;
}) {
  const p = padding || "px-3 py-3 md:px-10 md:py-5";
  const g = gap || "gap-x-2 md:gap-x-8";
  return (
    <nav className={cn("navbar flex flex-wrap", p, g, className)}>
      {items.map((item, index) => (
        <Link
          key={index}
          tabIndex={index}
          className={cn(
            "btn text-sm md:text-base",
            itemClassName,
            item.className
          )}
          href={item.href}
        >
          {item.text}
        </Link>
      ))}
    </nav>
  );
}

export function ImgNavbar({
  items,
  className,
  itemClassName,
  padding,
  gap,
  itemWidth,
  itemHeight,
}: {
  items: ImgNavItemProps[];
  className?: string;
  itemClassName?: string;
  itemWidth?: number;
  itemHeight?: number;
  padding?: string;
  gap?: string;
}) {
  const p = padding || "p-2";
  const g = gap || "gap-x-2";
  const w = itemWidth || 24;
  const h = itemHeight || 24;
  return (
    <nav className={cn("navbar flex", p, g, className)}>
      {items.map((item, index) => (
        <Link
          key={index}
          tabIndex={index}
          className={cn("btn", itemClassName, item.className)}
          href={item.href}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={w}
            height={h}
            className="md:w-[30px] md:h-[30px]"
          />
        </Link>
      ))}
    </nav>
  );
}

export const HomePages: NavItemProps[] = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/1250/p_1_2", text: "Design Experience", className: "ms-auto" },
];

export const PortfolioPages: NavItemProps[] = [
  { href: "/", text: "Home" },
  { href: "./p_0", text: "Project 0" },
  { href: "./p_1_1", text: "Project 1 Prep" },
  { href: "./p_1_2", text: "Project 1" },
  { href: "./p_2_1", text: "Project 2 Prep" },
];

export const ExternalLinks: ImgNavItemProps[] = [
  { href: "https://github.com/OceanMyang", src: "/github.svg", alt: "GitHub" },
  {
    href: "https://www.linkedin.com/in/mingyang-zhang-ocean/",
    src: "/linkedin.svg",
    alt: "LinkedIn",
  },
  { href: "https://oceanmyang.itch.io/", src: "/itch.svg", alt: "Itch" },
];
