import Link from "next/link";

function NavItem({ href, text }: { href: string; text: string }) {
  return <Link className="btn" href={href}>{text}</Link>;
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex-center space-x-4 p-4">
        <NavItem href="/" text="Home" />
        <NavItem href="/p_0" text="Project 0" />
      </div>
    </nav>
  );
}
