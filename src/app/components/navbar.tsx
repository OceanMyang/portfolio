import clsx from "clsx";
import Link from "next/link";

export interface NavItemProps {
  href: string;
  text: string;
  className?: string;
}

export function Navbar({
  pages,
  className,
  itemClassName,
}: {
  pages: NavItemProps[];
  className?: string;
  itemClassName?: string;
}) {
  return (
    <nav className={clsx("navbar flex px-10 py-5 gap-x-8", className)}>
      {pages.map((page, index) => (
        <Link
          key={index}
          tabIndex={index}
          className={clsx("btn", itemClassName, page.className)}
          href={page.href}
        >
          {page.text}
        </Link>
      ))}
    </nav>
  );
}

export const HomePages = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/1250/p_0", text: "ARTF1250", className: "ms-auto" },
];

export const PortfolioPages = [
  { href: "/", text: "Home" },
  { href: "./p_0", text: "HW 0" },
];
