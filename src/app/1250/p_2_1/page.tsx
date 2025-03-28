import { TextContainer } from "@/components/text-container";
import { Navbar, PortfolioPages } from "@/components/navbar";
import { H1, H2 } from "@/components/headings";
import { AuroraBackground } from "@/components/aurora-background";
import Image from "next/image";

export default function Project2Prep() {
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
        <H1>Mapping</H1>

        <div className="grid gap-8 md:gap-16 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-5 md:p-10 lg:p-20 rounded-2xl shadow-lg">
            <div className="flex-center">
              <Image
                src="/img/p_2/map1.jpg"
                alt="Traffic Map"
                width={500}
                height={500}
                className="rounded-3xl"
              />
            </div>
            <div className="mt-6 text-center text-gray-600 font-medium">
              Traffic Flow Map
            </div>
          </div>

          <div className="bg-white p-5 md:p-10 lg:p-20 rounded-2xl shadow-lg">
            <div className="flex-center">
              <Image
                src="/img/p_2/map2.jpg"
                alt="Emotions Map"
                width={500}
                height={500}
                className="rounded-3xl"
              />
            </div>
            <div className="mt-6 text-center text-gray-600 font-medium">
              Emotions Distribution Map
            </div>
          </div>
        </div>

        <section className="max-w-4xl mx-auto space-y-8">
          <H2>Analysis</H2>
          <p className="text-lg leading-relaxed">
            As we observed, the path between Dodge Hall and Mass Ave. seems to
            be the most moody part of the circle. Moreover, the majority of
            happy pedestrians had accompanies and were talking. We decided to
            map the traffic and the emotions of the traffic. First, we want our
            project to catch people&apos;s attention. Krentzman Quadrangle is
            big, and the flow of people was uneven in different parts of it. We
            want to set our project to the most prominent part. Second, since
            our project is associated with emotions, we also want to record the
            emotions of the passers-by. Therefore, we also made a second map.
          </p>
          <p className="text-lg leading-relaxed">
            We are telling the stories of people who are passing through the
            Krentzman Quadrangle. However, what we were really doing was just to
            conjecture their stories from the surface, especially people with no
            expressions. A neutral expression often doesn&apos;t mean the person
            feels nothing, but most of the time, they are hiding these emotions
            from being revealed. When we see a student walking by with a smile
            on their face, we are probably right that they have a happy story.
            However, we can&apos;t really tell the story of a student who
            expressed nothing on their face. That&apos;s what our project was
            supposed to do: to let the students tell their true stories despite
            the emotionless disguise.
          </p>
          <p className="text-lg leading-relaxed">
            Some opportunities that our map revealed were that there was a huge
            influx of people on the path connecting Snell to Mass Ave. We could
            potentially attract a lot of people to interact if we set our stuff
            there.
          </p>
        </section>
      </TextContainer>
    </>
  );
}
