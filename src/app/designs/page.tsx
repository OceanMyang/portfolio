import { Navbar, PortfolioPages } from "@/components/navbar";
import { AuroraBackground } from "@/components/aurora-background";
import { Carousel, Card } from "@/components/carousel";
import {
  Design1,
  Design2,
  Sei,
  Life,
  Mist
} from "./cards";

export default function Designs() {
  const data = [
    {
      src: "/img/designs/design_1.jpeg",
      title: "",
      category: "",
      content: <Design1 />,
      darkMode: true
    },
    {
      src: "/img/designs/inversion.jpeg",
      title: "",
      category: "",
      content: <Design2 />,
      darkMode: true
    },
    {
      src: "/img/designs/sei_sei_sei.png",
      title: "... . ..",
      category: "",
      content: <Sei />,
    },
    {
      src: "/img/designs/mist.jpeg",
      title: "Ali Mountains",
      category: "",
      content: <Mist />,
      darkMode: true
    },
    {
      src: "/img/designs/life.jpg",
      title: "",
      category: "",
      content: <Life />,
    },
  ];
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} darkMode={card.darkMode} />
  ));
  return (
    <>
      <AuroraBackground />
      <Navbar
        items={PortfolioPages}
        className="theme-1-r relative z-10"
        itemClassName="transition hover:bg-[var(--fg-1)] hover:text-[var(--bg-1)]"
      />
      <Carousel items={cards} />
    </>);
}