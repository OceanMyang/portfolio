import { TextContainer } from "../../components/text-container";
import { HomePages, Navbar } from "../../components/navbar";
import { H1 } from "../../components/headings";
import { AuroraBackground } from "@/components/aurora-background";
import { Grid } from "../../components/grid";
import { cn } from "../../lib/utils";
import Image from "next/image";

function Thumbnail({
  href,
  title = "",
  img = "/default.png",
  imgClassName,
}: {
  href?: string;
  title?: string;
  img?: string;
  imgClassName?: string;
}) {
  return (
    <a href={href} className="z-10 relative group" title={title}>
      <Image
        src={img}
        alt={title}
        className={cn("w-full h-full object-cover rounded-lg", imgClassName)}
        layout="responsive"
        width={500}
        height={300}
      />
      <div
        className={cn(
          "absolute flex-center inset-0 theme-2-r rounded-lg shadow-lg text-base md:text-xl text-center p-2",
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
          p: "py-6 md:py-12",
          bgColor: "bg-transparent",
        }}
        inner={{
          className: "relative z-10",
          w: "w-[95%] md:w-[90%] lg:w-[80%]",
          bgColor: "bg-transparent",
        }}
      >
        <H1 className="title">Projects</H1>
        <Grid
          className="rounded-lg"
          cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          gap="gap-4 md:gap-8"
          childrenClassName="h-auto"
        >
          <Thumbnail
            href="https://picbookgen.com"
            title="PicBookGen"
            img="/img/projects/PBG.png"
            imgClassName="object-left-top"
          />
          <Thumbnail
            href="https://oceanmyang.github.io/dragon_balls/"
            title="Dragon Balls"
            img="/img/projects/DB.png"
          />
          <Thumbnail
            href="https://oceanmyang.itch.io/night-at-the-museum"
            title="Night at the Museum"
            img="/img/projects/NATM.png"
          />
          <Thumbnail
            href="https://oceanmyang.itch.io/worm-man"
            title="Worm Man"
            img="/img/projects/WM.png"
          />
        </Grid>
      </TextContainer>
    </div>
  );
}
