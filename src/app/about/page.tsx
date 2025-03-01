import { TextContainer } from "@/components/text-container";
import {
  HomePages,
  ImgNavbar,
  ExternalLinks,
  Navbar,
} from "@/components/navbar";
import { H1 } from "@/components/headings";
import { BackgroundBeams } from "@/components/background-beams";
import { Container } from "@/components/container";
import CardStack from "@/components/cardstack";

export default function About() {
  const portraitSources = [
    "/img/portraits/portrait_1.jpg",
    "/img/portraits/portrait_2.jpg",
    "/img/portraits/portrait_3.jpg",
  ];
  return (
    <div className="flex flex-col h-screen">
      <BackgroundBeams />
      <Navbar
        items={HomePages}
        className="theme-1-r relative z-10"
        itemClassName="transition hover:bg-[var(--fg-1)] hover:text-[var(--bg-1)]"
      />
      <TextContainer
        outer={{
          className: "flex-grow justify-center",
          p: "px-4 py-6 md:px-10 md:py-12",
          bgColor: "theme-2-r",
        }}
        inner={{
          className: "relative z-10",
          w: "w-[95%] md:w-[80%] lg:w-[60%]",
          bgColor: "theme-1-r",
        }}
      >
        <Container className="flex-center flex-col w-full h-full">
          <H1 className="font-[cursive]">About Me</H1>
          <Container className="flex flex-col md:flex-row justify-evenly items-center gap-[5rem] md:gap-12">
            <Container
              w="w-full md:w-[50%]"
              bgColor="theme-1"
              className="font-serif text-base md:text-xl p-4 md:p-6 rounded-lg"
            >
              <Container p="pb-[15px] md:pb-[30px]">
                Hi! I&apos;m Mingyang Zhang. You can call me{" "}
                <span className="text-sky-800 italic">Ocean</span>.
              </Container>
              <Container p="pb-[15px] md:pb-[30px]">
                I&apos;m a computer science sophomore at{" "}
                <b>Northeastern University</b>.
              </Container>
              I&apos;m especially interested in how computers bring unique{" "}
              <span className="text-indigo-600">experiences</span> to users via
              different media, such as narratives and games.
            </Container>
            <CardStack imageSources={portraitSources} />
          </Container>
          <ImgNavbar items={ExternalLinks} className="mt-auto flex-center" />
        </Container>
      </TextContainer>
    </div>
  );
}
