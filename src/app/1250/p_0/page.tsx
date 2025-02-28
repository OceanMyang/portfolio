import { TextContainer } from "@/components/text-container";
import { Navbar, PortfolioPages } from "@/components/navbar";
import { H1, H2 } from "@/components/headings";
import { Ol, Li } from "@/components/list";
import Image from "next/image";
import { Container } from "@/components/container";
import { AuroraBackground } from "@/components/aurora-background";

export default function Project0() {
  return (
    <>
      <AuroraBackground />
      <Navbar
        items={PortfolioPages}
        className="theme-1-r relative z-10"
        itemClassName="transition hover:bg-[var(--fg-1)] hover:text-[var(--bg-1)]"
      />
      <TextContainer
        outer={{
          bgColor: "theme-1-2",
          className: "flex-grow",
        }}
        inner={{
          className: "relative z-10",
          bgColor: "theme-1",
        }}
      >
        <H1>Define My 5Ds</H1>

        <section>
          <H2>Definitions</H2>
          <Ol>
            <Li>measure in one direction</Li>
            <Li>
              one of a group of properties whose number is necessary and
              sufficient to determine uniquely each element of a system
            </Li>
            <Li>
              one of the elements or factors making up a complete personality or
              entity
            </Li>
            <Li>a lifelike or realistic quality</Li>
            <Li>
              the range over which or the degree to which something extends
            </Li>
          </Ol>
        </section>

        <section>
          <H2>Etymology</H2>
          <Ol>
            <Li>
              The word came from Middle English dimensio, meaning to measure out
            </Li>
          </Ol>
        </section>

        <section>
          <H2>Brainstorm</H2>
          Brainstorming… Story, Narrative, Attraction, Visual, Color,
          Expression, Response, Emotion, Composition, Inspiration,
          Entertainment, Fluency, Consistency, Aesthetics, Resonance, Harmony
        </section>

        <section>
          <H2>My Five Dimensions</H2>
          <Ol>
            <Li>Narrative</Li>
            <Li>Attention</Li>
            <Li>Expression</Li>
            <Li>Exploration</Li>
            <Li>Emotion</Li>
          </Ol>
        </section>

        <section>
          <H2>Mindmap</H2>
          <div className="flex-center">
            <iframe
              title="mindmap"
              src="https://miro.com/app/board/uXjVK9pP2rY=/?share_link_id=666082795456"
              width={700}
              height={500}
            ></iframe>
          </div>
        </section>

        <section>
          <H2>Works</H2>
          <Container p="p-4" className={"flex-center"}>
            <Image
              alt={"Narrative"}
              src={"/img/p_0/narrative.png"}
              width={500}
              height={300}
            ></Image>
          </Container>
          <Container p="p-4" className={"flex-center"}>
            <Image
              alt={"Attention"}
              src={"/img/p_0/attention.png"}
              width={500}
              height={300}
            ></Image>
          </Container>
          <Container p="p-4" className={"flex-center"}>
            <Image
              alt={"Expression"}
              src={"/img/p_0/expression.jpg"}
              width={300}
              height={500}
            ></Image>
          </Container>
          <Container p="p-4" className={"flex-center"}>
            <Image
              alt={"Emotion"}
              src={"/img/p_0/emotion.png"}
              width={500}
              height={300}
            ></Image>
          </Container>
          <Container p="p-4" className={"flex-center"}>
            <Image
              alt={"Exploration"}
              src={"/img/p_0/exploration.png"}
              width={500}
              height={300}
            ></Image>
          </Container>
        </section>

        <section>
          <H2>Reflection</H2>
          Through this exercise, I learned the definition of interactive
          experience and what we&apos;re doing over the course. Before this
          exercise, the word &quot;interactive experience&quot; sounds very
          blurry and ambiguous to me. The five dimensions gave me a rough
          understanding of this word, but these words were still flat
          abstractions with no content in my head. When I was searching the word
          dimensions over and over again, I explored more and more about how the
          five dimensions constitute the experience as a whole and at the same
          time uniquely identified against each other. When their relationships
          turned clearer, I think my definition of &quot;interactive
          experience&quot; became more accurate. Moreover, in creating my own
          five dimensions, I discovered the relationship between the dimensions
          and myself. I thought of my own experiences, the choices I have made
          for my life, the knowledge I had in my head, and some designs
          I&apos;ve seen and were beautiful. Meanwhile, my learning didn&apos;t
          proceed through lectures or reading, but experiencing the
          &quot;interactive experience&quot; myself and turning it into
          something that belongs to me. Therefore, &quot;interactive
          experience&quot; is no longer a blurry abstract concept in the
          textbook but something tangible, like a piece of memory, a work I
          created, or some of my thoughts I expressed etc...
        </section>
      </TextContainer>
    </>
  );
}
