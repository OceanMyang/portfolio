import TextContainer from "@/components/textContainer";
import { HomePages, Navbar } from "@/components/navbar";
import { H1 } from "@/components/headings";
import { BackgroundBeams } from "@/components/background-beams";
import { Grid } from "@/components/grid";
import cn from "@/lib/utils";

function Thumbnail({
  href,
  title,
  img,
  imgClassName,
}: {
  href?: string;
  title?: string;
  img?: string;
  imgClassName?: string;
}) {
  return (
    <a href={href} className="z-10 relative group" title={title}>
      <img
        src={img}
        alt={title}
        className={cn("w-full h-full object-cover rounded-lg", imgClassName)}
      />
      <H1 className="absolute flex-center inset-0 theme-3-r opacity-90 group-hover:opacity-0 transition-opacity duration-300 rounded-lg">
        {title}
      </H1>
    </a>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar
        items={HomePages}
        className="theme-1-r relative z-10"
        itemClassName="transition hover:bg-[var(--fg-1)] hover:text-[var(--bg-1)]"
      />
      <BackgroundBeams />
      <TextContainer
        outer={{
          className: "flex-grow justify-center",
          p: "px-10 py-12",
          bgColor: "theme-2-r",
        }}
        inner={{
          className: "relative z-10",
          w: "w-[80%]",
          bgColor: "theme-3",
        }}
      >
        <H1>Projects</H1>
        <Grid
          className="rounded-lg"
          cols="grid-cols-1 md:grid-cols-2 gap-8 p-8"
          childrenClassName="h-[500px]"
        >
          <Thumbnail
            href="https://picbookgen.com"
            title="PicBookGen"
            img="/PBG.png"
            imgClassName="object-left-top"
          />
          <Thumbnail
            href="https://oceanmyang.github.io/dragon_balls/"
            title="Dragon Balls"
            img="/DB.png"
          />
          <Thumbnail
            href="https://oceanmyang.itch.io/night-at-the-museum"
            title="Night at the Museum"
            img="/NATM.png"
          />
          <Thumbnail
            href="https://oceanmyang.itch.io/worm-man"
            title="Worm Man"
            img="/WM.png"
          />
        </Grid>
      </TextContainer>
    </div>
  );
}
