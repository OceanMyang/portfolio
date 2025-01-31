import { TextContainer } from "@/components/textContainer";
import { Navbar, PortfolioPages } from "@/components/navbar";
import { H1, H2 } from "@/components/headings";
import { Grid } from "@/components/grid";
import Image from "next/image";
import { AuroraBackground } from "@/components/aurora-background";

export default function HW0() {
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
        <H1>Fictional Object: Research & Proposal</H1>

        <div>
          <H2>Table 1</H2>
          <Grid
            cols="grid-cols-3"
            gap="gap-0"
            childrenClassName="border border-black p-2"
          >
            <div>
              <Image
                alt={""}
                src={"/earplug.png"}
                width={300}
                height={300}
              ></Image>
            </div>
            <div>
              The object has a soft form with no sharp edges. It is made of
              fluffy memory foam. The foam is molded into this shape. It is
              designed to be compressed into any shape and put into the ears.
              Then, it is able to recover to its original shape. One encounters
              this object somewhere near the pillow. It arouses a gentle, tender
              experience which facilitates sleep.
            </div>
            <div>
              I’m very susceptible to insomnia. I wouldn’t be able to sleep if I
              heard a little voice, especially snoring. Unfortunately, my
              roommate snores. He always sleeps before me and stops me from
              sleeping by snoring. A pair of earplugs is necessary for me.
            </div>
            <div>
              <Image alt={""} src={"/pen.jpg"} width={300} height={300}></Image>
            </div>
            <div>
              The object takes an elongated form with a sharp head. It is made
              of light metal, very light and portable. It is created by filling
              the shell with carbon refill. It allows the users to focus on its
              sharp head. All of its design flows towards the head. One
              encounters the object anywhere: writing, creating, recording etc.
              It offers a flexible experience: you can use it to do anything and
              create anything.
            </div>
            <div>
              When I was young, I used the object to randomly scratch figures
              and symbols out of my imagination. When I was older, I tended to
              use it to express my thoughts and personality since I don’t like
              talking. I also use it to record some weird vision or dreams I
              encountered. It is like an alternate way to express myself.
            </div>
            <div>
              <Image
                alt={""}
                src={"/mouth.jpg"}
                width={300}
                height={300}
              ></Image>
            </div>
            <div>
              This object has a long curvy seam in the middle and an enclosed
              form. It’s made of stretchable and compressible materials. It’s
              meant to be opened, like a door. Someone won’t encounter the
              object, or even feel its existence. It’s a part of them and they
              have been one since they were born. Others need to read its
              manual, fearing that it would break. It is an amplifier of
              emotions and the major way for me to attain social experience.
            </div>
            <div>
              I’m unsatisfied with my articulation. I’m used to talking to
              myself at a low volume only I could hear. I’m also used to using
              this volume when I’m talking to other people. Meanwhile, the pitch
              of my voice is also very low. I often feel that I can’t express
              what I want to say. When I bring up a conversation, people usually
              respond: “What did you say?” This object shaped my personality as
              it is now.
            </div>
          </Grid>
        </div>

        <div>
          <H2>References</H2>
          <Grid
            cols="grid-cols-3"
            gap="gap-0"
            childrenClassName="border border-black p-2"
          >
            <Image
              alt={""}
              src={"/speaker.jpg"}
              width={300}
              height={300}
            ></Image>
            <Image alt={""} src={"/mask.jpg"} width={300} height={300}></Image>
            <Image alt={""} src={"/eeg.jpg"} width={300} height={300}></Image>
          </Grid>
        </div>

        <div>
          <H2>Sketches</H2>
          <Grid
            cols="grid-cols-1"
            gap="gap-0"
            childrenClassName="p-4 flex-center"
          >
            <Image
              alt={""}
              src={"/project1_sketch1.jpg"}
              width={500}
              height={300}
            ></Image>

            <Image
              alt={""}
              src={"/project1_sketch2.jpg"}
              width={500}
              height={300}
            ></Image>
          </Grid>
        </div>

        <div>
          <H2>Table 2</H2>
          <Grid
            cols="grid-cols-2"
            gap="gap-0"
            childrenClassName="border border-black"
          >
            <div className="font-bold text-white bg-black">
              Object Attribute
            </div>
            <div className="col-span-2 font-bold text-white bg-black">
              Description
            </div>

            <div>Audience</div>
            <div className="col-span-2">
              People who can&apos;t speak, have difficulty in speaking, or
              aren&apos;t good at communication.
            </div>

            <div>Form</div>
            <div className="col-span-2">
              A black mask made of lightweight fabrics.
            </div>

            <div>Material</div>
            <div className="col-span-2">
              mask: fabrics; speaker cone: polypropylene.
            </div>

            <div>Appeal</div>
            <div className="col-span-2">
              Designed to be convenient, accessible, and natural.
            </div>

            <div>Purpose</div>
            <div className="col-span-2">
              Helps users express their thoughts loud and clear through brain
              signal interpretation and speech.
            </div>

            <div>Message</div>
            <div className="col-span-2">
              The product is an alternative method for communication.
            </div>

            <div>Location</div>
            <div className="col-span-2">
              Used in casual conversations mainly
            </div>

            <div>Usability</div>
            <div className="col-span-2">
              Lightweight, portable, and easy to use
            </div>

            <div>Technique</div>
            <div className="col-span-2">
              Receives brain signals, interprets them into words, and outputs
              through the speaker.
            </div>
          </Grid>
        </div>

        <div>
          <H2>Proposal</H2>
          The major form of this product is a black mask made of fabrics. A
          speaker cone is installed on the mask and made of light polypropylene
          materials. This material is advantageous for its lightweight. Two
          electrodes stretch out from the mask and are used to attach to the
          users&#39; head. All electronic units are connected to an embedded
          mini computer. This product is designed for people who can&#39;t
          speak, have difficulty in speaking, or aren&#39;t good at
          communication. It helps the users express their thoughts loud and
          clear. There have already been technologies with this functionality,
          like speech generating devices. Stephen Hawking had this device
          installed on the wheelchair. This product, however, will be more
          convenient and accessible.
          <br />
          The product completes its task in the following process. First, listen
          to the user by receiving the users&#39; brain signals from the
          electrodes, just like what happened in EEG. These electrodes are much
          more powerful and resistant to noises. Second, understand the user:
          the computer interprets the signals into semantic words and translates
          them into voices. Third, speak: the speaker outputs these words. Users
          may use it mainly during normal conversations and sometimes official
          occasions like public speech or presentations. The product is designed
          to be light and portable for the users&#39; convenience. The mask-like
          appearance and choice of voiceline intends to be as natural as
          possible to reduce the users&#39; burden of using this product.
          <br />
          However, some elements of this product still look unnatural, like the
          most predominant speaker. It looks like a strange mouth that can&#39;t
          be closed and is maybe screaming or appealing. The metallic texture of
          this mouthpiece also alienates from the original, organic mouth. This
          product reduces the experience of human speaking, which is an
          important portion of human experience. All of these convey a message
          that this product is still an alternative method.
        </div>

        <div>
          <H2>Bibliography</H2>
          <p>
            <strong>Speech Generating Devices.</strong> BlueCross BlueShield of
            South Carolina,
            <a
              href="https://www.southcarolinablues.com/web/public/brands/medicalpolicy/external-policies/speech-generating-devices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              https://www.southcarolinablues.com/web/public/brands/medicalpolicy/external-policies/speech-generating-devices/
            </a>
            . Accessed 28 Jan. 2025.
          </p>
          <p>
            <strong>Electroencephalogram (EEG).</strong> Johns Hopkins Medicine,
            <a
              href="https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/electroencephalogram-eeg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              www.hopkinsmedicine.org/health/treatment-tests-and-therapies/electroencephalogram-eeg
            </a>
            . Accessed 28 Jan. 2025.
          </p>
          <p>
            <strong>Types of EEG Electrodes: Gel, Water, and Dry.</strong> TMSi,
            21 Apr. 2022,
            <a
              href="https://info.tmsi.com/blog/types-of-eeg-electrodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              https://info.tmsi.com/blog/types-of-eeg-electrodes
            </a>
            . Accessed 30 Jan. 2025.
          </p>
          <p>
            <strong>Loudspeaker Materials 101: The Cone.</strong> MISCO
            Speakers, Oct 5, 2021,
            <a
              href="https://blog.miscospeakers.com/speaker-cone-video"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              https://blog.miscospeakers.com/speaker-cone-video
            </a>
            . Accessed 30 Jan. 2025.
          </p>
        </div>
        <div>
          <H2>Paper Prototyping</H2>

          <Grid
            cols="grid-cols-2"
            gap="gap-0"
            childrenClassName="p-4 flex-center"
          >
            <Image
              alt={""}
              src={"/prototype1.jpg"}
              width={300}
              height={300}
            ></Image>
            <Image
              alt={""}
              src={"/prototype2.jpg"}
              width={300}
              height={300}
            ></Image>
            <Image
              alt={""}
              src={"/prototype3.jpg"}
              width={300}
              height={300}
            ></Image>
            <Image
              alt={""}
              src={"/prototype4.jpg"}
              width={300}
              height={300}
            ></Image>
          </Grid>
        </div>
      </TextContainer>
    </>
  );
}
