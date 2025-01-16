import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Navbar />
      <div className="flex-grow flex-center">
        <div className="title">Hi, I&apos;m Ocean!</div>
      </div>
    </div>
  );
}
