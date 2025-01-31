import { TextContainer } from "../../components/textContainer";
import { HomePages, Navbar } from "../../components/navbar";
import { H1 } from "../../components/headings";
import { AuroraBackground } from "@/components/aurora-background";
import { Grid } from "../../components/grid";
import { cn } from "../../lib/utils";

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
      <div
        className={cn(
          "absolute flex-center inset-0 theme-2-r rounded-lg shadow-lg text-xl text-center",
          "transition-opacity duration-300 opacity-90 group-hover:opacity-0 text-opacity-5"
        )}
      >
        {title}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col h-screen">
      <AuroraBackground></AuroraBackground>
      <Navbar
        items={HomePages}
        className="theme-1-r relative z-10 w-full"
        itemClassName="transition hover:bg-[var(--fg-1)] hover:text-[var(--bg-1)]"
      />
      <TextContainer
        outer={{
          className: "flex-grow flex-center",
          p: "py-12",
          bgColor: "bg-transparent",
        }}
        inner={{
          className: "relative z-10",
          w: "w-[80%]",
          bgColor: "bg-transparent",
        }}
      >
        <H1 className="title">Projects</H1>
        <Grid
          className="rounded-lg"
          cols="grid-cols-1 md:grid-cols-4"
          gap="gap-8"
          childrenClassName="h-auto"
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
