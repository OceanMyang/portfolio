import { Navbar, PortfolioPages } from "@/components/navbar";

export default function Project2() {
  return (
    <>
      <div className="theme-1-r w-[100vw] absolute">
        <Navbar
            items={PortfolioPages}
            className="theme-1-r"
            itemClassName="transition hover:bg-[var(--fg-1)] hover:text-[var(--bg-1)]"
        />
      </div>
      <iframe 
        src="/ppt/index.html" 
        className="w-[100vw] h-[100vh] z-100"
      />
    </>
  );
}
