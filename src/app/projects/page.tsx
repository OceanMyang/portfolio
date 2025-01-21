import TextContainer from "../components/textContainer";
import { HomePages, Navbar } from "../components/navbar";
import { H1 } from "../components/headings";
import { BackgroundBeams } from "../components/background-beams";

export default function Projects() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar
        pages={HomePages}
        className="theme-1-r relative z-10"
        itemClassName="transition hover:bg-[var(--fg-1)] hover:text-[var(--bg-1)]"
      />
      <BackgroundBeams />
      <TextContainer
        outer={{
          className: "flex-grow justify-center",
          bgColor: "theme-2-r",
        }}
        inner={{
          className: "relative z-10",
          bgColor: "theme-2",
        }}
      >
        <H1>Projects</H1>
      </TextContainer>
    </div>
  );
}
