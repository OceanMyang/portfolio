import Image from "next/image";

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

export function Design1() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/img/designs/design_1.jpeg"
        alt="Design 1"
        width={2000}
        height={1000}
        className="rounded-3xl"
      />
    </div>
  );
}

export function Design2() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/img/designs/inversion.jpeg"
        alt="Design 2"
        width={2000}
        height={1000}
        className="rounded-3xl"
      />
    </div>
  );
}

export function Sei() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/img/designs/sei_sei_sei_2.png"
        alt="sei sei sei"
        width={2000}
        height={1000}
        className="rounded-3xl"
      />
    </div>
  );
}

export function Life() {
  return (
    <div className="flex justify-center my-4">
      <video width="300" height="300" controls className="rounded-3xl">
        <source src="/vid/life.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export function Mist() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/img/designs/mist.jpeg"
        alt="Mist"
        width={2000}
        height={1000}
        className="rounded-3xl"
      />
    </div>
  );
}