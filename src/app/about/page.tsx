import TextContainer from "../components/textContainer";
import { HomePages, Navbar } from "../components/navbar";
import { H1 } from "../components/headings";
import { BackgroundBeams } from "../components/background-beams";
import Image from "next/image";
import { Container } from "../components/container";

export default function About() {
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
          px: "px-10",
          py: "py-12",
          bgColor: "theme-2-r",
        }}
        inner={{
          className: "relative z-10",
          w: "w-[60%]",
          bgColor: "theme-1-r",
        }}
      >
        <H1>About</H1>
        <Container className="flex-center gap-12">
          <Container w="w-[50%]" bgColor="theme-1" className="flex-center p-6 rounded-lg">
            Hi! I am Mingyang Zhang. My English name is Ocean.
            <br />
            I&apos;m especially interested in how computers bring unique
            experiences to users via different media, such as websites and
            games. I&apos;ve been worked in NIO&apos;s digital product
            department to better demonstrate the products to potential
            consumers. I&apos;ve also sharpened my skills by making products at
            hackathons and game jams, such as PawHacks and Jack-O-Lantern Jam.
          </Container>
          <Image
            src="/portfolio.jpg"
            alt="portfolio"
            width={200}
            height={200}
            objectFit="cover"
            className="rounded-3xl"
          ></Image>
        </Container>
      </TextContainer>
    </div>
  );
}
