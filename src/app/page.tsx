"use client";
import { Navbar, HomePages } from "@/app/components/navbar";
import { WavyBackground } from "./components/wavy-background";
import { useEffect, useState } from "react";

export default function Home() {
  const [fgColor, setFgColor] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the computed style of the root element
    const rootStyle = getComputedStyle(document.documentElement);
    // Get the value of the custom property
    const color1 = rootStyle.getPropertyValue("--background").trim();
    setFgColor(color1);
  }, []);

  return (
    <WavyBackground
      speed="fast"
      waveOpacity={1}
      blur={1}
      colors={["transparent"]}
      backgroundFill={fgColor || "white"}
      className="flex flex-col h-screen w-full"
    >
      <Navbar
        pages={HomePages}
        className="theme-1"
        itemClassName="transition hover:bg-[var(--bg-1)] hover:text-[var(--fg-1)]"
      />
      <div className="flex-grow flex-center">
        <div className="title">Hi, I&apos;m Ocean!</div>
      </div>
    </WavyBackground>
  );
}
