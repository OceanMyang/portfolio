import { TextContainer } from "@/components/text-container";
import { Navbar, PortfolioPages } from "@/components/navbar";
import { H1, H2 } from "@/components/headings";
import Accordion from "@/components/accordion";
import { Carousel, Card } from "@/components/carousel";
import Image from "next/image";
import {
  Attributes,
  Processes,
  StoryBoard,
  Usage,
  Values,
  MobileApp,
} from "./cards";
import Link from "next/link";
export default function Project2() {
  const data = [
    {
      src: "/img/p_1/sb1.png",
      title: "Stories",
      category: "Who?",
      content: <StoryBoard />,
    },
    {
      src: "/img/p_1/sketches.jpg",
      title: "Attributes",
      category: "What?",
      content: <Attributes />,
    },
    {
      src: "/img/p_1/prototype1.jpg",
      title: "Processes",
      category: "How?",
      content: <Processes />,
    },
    {
      src: "/img/p_1/look3.jpg",
      title: "Values",
      category: "Why?",
      content: <Values />,
    },
    {
      src: "/img/p_1/usage3.jpg",
      title: "Usage",
      category: "Where?",
      content: <Usage />,
    },
    {
      src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNkM2REEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1icmFpbiI+PHBhdGggZD0iTTEyIDVhMyAzIDAgMSAwLTUuOTk3LjEyNSA0IDQgMCAwIDAtMi41MjYgNS43NyA0IDQgMCAwIDAgLjU1NiA2LjU4OEE0IDQgMCAxIDAgMTIgMThaIi8+PHBhdGggZD0iTTEyIDVhMyAzIDAgMSAxIDUuOTk3LjEyNSA0IDQgMCAwIDEgMi41MjYgNS43NyA0IDQgMCAwIDEtLjU1NiA2LjU4OEE0IDQgMCAxIDEgMTIgMThaIi8+PHBhdGggZD0iTTE1IDEzYTQuNSA0LjUgMCAwIDEtMy00IDQuNSA0LjUgMCAwIDEtMyA0Ii8+PHBhdGggZD0iTTE3LjU5OSA2LjVhMyAzIDAgMCAwIC4zOTktMS4zNzUiLz48cGF0aCBkPSJNNi4wMDMgNS4xMjVBMyAzIDAgMCAwIDYuNDAxIDYuNSIvPjxwYXRoIGQ9Ik0zLjQ3NyAxMC44OTZhNCA0IDAgMCAxIC41ODUtLjM5NiIvPjxwYXRoIGQ9Ik0xOS45MzggMTAuNWE0IDQgMCAwIDEgLjU4NS4zOTYiLz48cGF0aCBkPSJNNiAxOGE0IDQgMCAwIDEtMS45NjctLjUxNiIvPjxwYXRoIGQ9Ik0xOS45NjcgMTcuNDg0QTQgNCAwIDAgMSAxOCAxOCIvPjwvc3ZnPg==",
      title: "NeuroVoice",
      category: "Our Mobile App",
      content: <MobileApp />,
    },
  ];
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <>
      <Navbar
        items={PortfolioPages}
        className="text-black bg-white relative z-10"
        itemClassName="transition hover:bg-black hover:text-white"
      />
      <TextContainer
        outer={{
          bgColor: "bg-stone-100",
          className: "flex-grow",
        }}
        inner={{
          className: "relative z-10",
          bgColor: "bg-stone-100 text-black",
        }}
      >
        <H1>Fictional Object: MySpeaker</H1>

        <div className="bg-white p-20 rounded-2xl mb-10 md:mb-20 shadow-lg">
          <div className="flex-center">
            <Image
              src="/img/p_1/product.png"
              alt="MySpeaker"
              width={500}
              height={500}
              className="rounded-3xl"
            />
          </div>

          <div className="text-lg tracking-widest max-w-3xl mx-auto text-black">
            Have you ever had the feeling the word is lingering on the verge of
            your mouth, but you just can&apos;t spit it out?
            <br />
            Have you felt so indifferent, unable to express your love to the one
            you love?
            <br />
            Well, <strong className="text-xl italic">MySpeaker</strong> will
            speak for you. If you want to say something, it will say something
            loud and clear. MySpeaker will be your most loyal voice and
            representative.
            <br />
            Mask on, mask off. With MySpeaker, you might not be anyone, but you
            will be yourself.
          </div>
        </div>

        <Accordion
          sections={[
            {
              title: "What?",
              content:
                "MySpeaker is a speech generating device in the shape of a mask.",
            },
            {
              title: "Who?",
              content:
                "It is designed for people who can't speak, have difficulty in conversations, aren't confident in their talk, or want to speak but can't speak out for some reasons.",
            },
            {
              title: "Where?",
              content: "It can be used in daily conversations.",
            },
            {
              title: "How?",
              content:
                "The device reads the brain waves through the electrodes, translates those into audio signals, and transmits them to the speaker.",
            },
            {
              title: "Why?",
              content:
                "Have you ever had the feeling the word is lingering on the verge of your mouth, but you just can't spit it out? Have you felt so indifferent, unable to express your love to the one you love? Well, MySpeaker will speak for you. If you want to say something, it will say it out loud. It will be your most loyal voice and representative. Mask on, mask off. With MySpeaker, you might not be anyone, but you will be yourself.",
            },
          ]}
        />

        <Carousel items={cards} />

        <div className="flex-center flex-col">
          <H2>Our Mobile App: NeuroVoice</H2>
          We&apos;ve partnered with{" "}
          <span className="font-bold">NeuroVoice</span> to bring you the best
          experience.
          <Link
            href="https://v0-chat-app-design.vercel.app/"
            className="hover:underline transition duration-200"
          >
            Click here to download our mobile app!
          </Link>
        </div>
      </TextContainer>
    </>
  );
}
