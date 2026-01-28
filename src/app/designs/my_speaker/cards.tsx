import { Grid, RawGrid } from "@/components/grid";
import Image from "next/image";
import Link from "next/link";

export function Dummy() {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          The first rule of Apple club is that you boast about Apple club.
        </span>{" "}
        Keep a journal, quickly jot down a grocery list, and take amazing class
        notes. Want to convert those notes to text? No problem. Langotiya jeetu
        ka mara hua yaar is ready to capture every thought.
      </p>
    </div>
  );
}

export function StoryBoard() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/img/p_1/sb1.png"
        alt="Image 1"
        width={2000}
        height={1000}
        className="rounded-3xl"
      />
      <Image
        src="/img/p_1/sb2.jpg"
        alt="Image 2"
        width={2000}
        height={1000}
        className="rounded-3xl"
      />
    </div>
  );
}

export function Attributes() {
  const attributes = [
    {
      label: "Audience",
      description:
        "People who can't speak, have difficulty in speaking, aren't confident with their voices and speech, or can't speak for other reasons.",
    },
    {
      label: "Form",
      description:
        'A black mask with a noticable microphone speaker on the front. The "mouth" is designed to differ from a real mouth to avoid the Uncanny Effect.',
    },
    {
      label: "Medium",
      description:
        "The priority is lightness. We used a paper cone to the speaker and soft, breathable fabric materials for the mask, which reduced the weight and also cost of production.",
    },
    {
      label: "Appeal",
      description:
        "MySpeaker is an assertive product with strong personality. It voices for the voiceless.",
    },
    {
      label: "Message",
      description:
        "MySpeaker is intended to be noticeable in line with the principle of disability visibility.",
    },
    {
      label: "Usability",
      description:
        "The user can use MySpeaker as a normal mask in normal life without any obstacles. It is convenient and waterproof. ",
    },
    {
      label: "Technique",
      description:
        "MySpeaker fetches the user's brain signals from the two electrodes. A micro-computer in the device translates the signals into words and outputs them through the speaker.",
    },
  ];

  return attributes.map(({ label, description }) => (
    <div
      key={label}
      className="bg-[#cbcbcf] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <RawGrid
        cols="grid-cols-2"
        gap="gap-4"
        childrenClassName="bg-[#cbcbcf] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {label}
        </span>
        <span className="text-neutral-700 dark:text-neutral-200">{description}</span>
      </RawGrid>
    </div>
  ));
}

export function Processes() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Grid
        cols="grid-cols-4"
        gap="gap-0"
        childrenClassName="p-4 flex-center rounded-3xl"
      >
        <Image
          alt={""}
          src={"/img/p_1/prototype1.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
        <Image
          alt={""}
          src={"/img/p_1/prototype2.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
        <Image
          alt={""}
          src={"/img/p_1/prototype3.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
        <Image
          alt={""}
          src={"/img/p_1/prototype4.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
      </Grid>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Paper prototype.
          </span>{" "}
          Completely made of paper. It pins down the final shape of the product.
          The only difference is that the speaker size is too big.
        </p>
      </div>
      <Grid
        cols="grid-cols-2"
        gap="gap-0"
        childrenClassName="p-4 flex-center rounded-3xl"
      >
        <Image
          alt={""}
          src={"/img/p_1/product1_1.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
        <Image
          alt={""}
          src={"/img/p_1/product1_2.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
      </Grid>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            First iteration of the product.
          </span>{" "}
          Very close to the final one. The mask is made of soft fabric
          materials. The wires are elastic cords used for chargers. The cone is
          torn from a real speaker. If you believe it.
        </p>
      </div>
      <Grid
        cols="grid-cols-3"
        gap="gap-0"
        childrenClassName="p-4 flex-center rounded-3xl"
      >
        <Image
          alt={""}
          src={"/img/p_1/product2_1.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
        <Image
          alt={""}
          src={"/img/p_1/product2_2.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
        <Image
          alt={""}
          src={"/img/p_1/product2_3.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
      </Grid>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Second iteration of the product.
            </span>{" "}
            Improved some details on the first iteration. Sealed the
            speaker&apos;s edges with black tapes and shortened the wires. The
            product now looks more fluid and polished.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Values() {
  return (
    <>
      <Grid
        cols="grid-cols-3"
        gap="gap-0"
        childrenClassName="p-4 flex-center rounded-3xl"
      >
        <Image
          alt={""}
          src={"/img/p_1/look1.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
        <Image
          alt={""}
          src={"/img/p_1/look2.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
        <Image
          alt={""}
          src={"/img/p_1/look3.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
      </Grid>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <h1 className="text-2xl font-bold text-neutral-700 dark:text-neutral-200">
          Functional Value
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          It helps the users to regain or enhance their speech. Communication is
          a large part of life and is associated with tons of experiences and
          opportunities. However, you can’t see the other side of the door
          without the key. MySpeaker can hand this key over to the users.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <h1 className="text-2xl font-bold text-neutral-700 dark:text-neutral-200">
          Supplemental Value
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          MySpeaker redefines the user with an articulate and characteristic
          voice. The users usually report that it boosted their confidence and
          sense of existence among the group. Someone even said that it gave
          them another personality.
        </p>
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <h1 className="text-2xl font-bold text-neutral-700 dark:text-neutral-200">
          Admirable Value
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          MySpeaker captures the balance between small and big, natural and
          mechanical. It isn’t too alien or bulky so the user can use it
          seamlessly in daily life. On the other hand, we tried to create an
          assertive product that makes up for its owner’s voice. Both its shape
          and its voice are recognizable. We also avoided it being too natural
          and uncanny by adding some mechanical shapes. In fact, some kids
          bought this product just because it looks cool like a robot.
        </p>
      </div>
    </>
  );
}

export function Usage() {
  return (
    <>
      <Grid
        cols="grid-cols-3"
        gap="gap-0"
        childrenClassName="p-4 flex-center rounded-3xl"
      >
        <Image
          alt={""}
          src={"/img/p_1/usage1.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
        <Image
          alt={""}
          src={"/img/p_1/usage2.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
        <Image
          alt={""}
          src={"/img/p_1/usage3.jpg"}
          width={300}
          height={300}
          className="rounded-3xl"
        ></Image>
      </Grid>
      <div className="flex justify-center my-4">
        <video width="300" height="300" controls className="rounded-3xl">
          <source src="/vid/usage4.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export function MobileApp() {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          <Link
            href="https://v0-chat-app-design.vercel.app/"
            className="hover:underline font-bold transition duration-200"
          >
            Click here to download our app.
          </Link>
        </span>{" "}
        We&apos;ve partnered with <strong>NeuroVoice</strong> to bring you the
        best experience.
      </p>
    </div>
  );
}
