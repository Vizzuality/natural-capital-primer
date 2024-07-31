"use client";
import { useState, useRef } from "react";
import Footer from "@/components/footer";
import Menu from "./menu";
import Outro from "./outro";
import Intro from "./intro";
import { SECTIONS } from "./data";
import Section from "./section";
import useScrollSpy from "@/hooks/use-scroll-spy";

export default function ADayInTheLife() {
  const [soundOn, setSoundOn] = useState(false);

  const links = [
    {
      text: "Mobile Phone",
      id: "mobile-phone",
      href: "#mobile-phone",
      ref: useRef<HTMLDivElement>(null),
    },
    { text: "Shower", id: "shower", href: "#shower", ref: useRef<HTMLDivElement>(null) },
    { text: "Clothes", id: "clothes", href: "#clothes", ref: useRef<HTMLDivElement>(null) },
    {
      text: "Kettle & Coffee",
      id: "kettle-and-coffee",
      href: "#kettle-and-coffee",
      ref: useRef<HTMLDivElement>(null),
    },
    {
      text: "Bread & Butter",
      id: "bread-and-butter",
      href: "#bread-and-butter",
      ref: useRef<HTMLDivElement>(null),
    },
    { text: "Train", id: "train", href: "#train", ref: useRef<HTMLDivElement>(null) },
    { text: "Laptop", id: "laptop", href: "#laptop", ref: useRef<HTMLDivElement>(null) },
  ];

  const scrollActiveId = useScrollSpy(Object.values(links).map(({ id, ref }) => ({ id, ref })));

  return (
    <>
      <Intro />
      <Menu links={links} activeId={scrollActiveId} />
      {SECTIONS.map((section) => (
        <Section
          sectionRef={links.find((link) => link.id === section.id)?.ref}
          soundOn={soundOn}
          setSoundOn={setSoundOn}
          key={`section-${section.title} `}
          section={section}
        />
      ))}
      <Outro />
      <Footer />
    </>
  );
}
