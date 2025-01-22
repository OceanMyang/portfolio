import TextContainer from "@/components/textContainer";
import { HomePages, ImgNavbar, InfoPages, Navbar } from "@/components/navbar";
import { H1 } from "@/components/headings";
import { BackgroundBeams } from "@/components/background-beams";
import { Container } from "@/components/container";
import CardStack from "@/components/cardstack";

export default function About() {
  const srcs = [
    "/portrait_1.jpg",
    "/portrait_2.jpg",
    "/portrait_3.jpg",
  ];
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
          w: "w-[60%]",
          bgColor: "theme-1-r",
        }}
      >
        <Container className="flex-center flex-col w-full h-full">
          <H1>About</H1>
          <Container className="flex justify-evenly items-center gap-12">
            <Container
              w="w-[50%]"
              bgColor="theme-1"
              className="font-serif text-xl p-6 rounded-lg"
            >
              <Container className="pb-[30px]">
                Hi! I am Mingyang Zhang. My English name is Ocean.
              </Container>
              I&apos;m especially interested in how computers bring unique
              experiences to users via different media, such as websites and
              games.
            </Container>
            <CardStack imageSources={srcs} />
          </Container>
          <ImgNavbar
            items={InfoPages}
            className="mt-auto flex-center"
          />
        </Container>
      </TextContainer>
    </div>
  );
}
