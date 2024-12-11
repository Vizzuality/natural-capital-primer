"use client";
import { useMemo, useRef, useState } from "react";
import Footer from "@/components/footer";
import Outro from "./outro";
import Intro from "./intro";
import { SECTIONS } from "./data";
import Section from "./section";
import SecondaryNavigation from "@/components/secondary-navigation";
import { useInView } from "framer-motion";
import React from "react";
import Header from "@/components/header";

export default function ADayInTheLife() {
  const [soundOn, setSoundOn] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = [
    {
      key: "introduction",
      value: "Introduction",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      key: "mobile-phone",
      value: "Mobile Phone",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      key: "shower",
      value: "Shower",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      key: "clothes",
      value: "Clothes",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      key: "kettle-and-coffee",
      value: "Kettle & Coffee",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      key: "bread-and-butter",
      value: "Bread & Butter",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      key: "train",
      value: "Train",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      key: "laptop",
      value: "Laptop",
      ref: useRef<HTMLDivElement | null>(null),
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inViews = [
    useInView(navItems[0].ref, { margin: "0px 0px 0% 0px" }),
    useInView(navItems[1].ref, { margin: "0px 0px -90% 0px" }),
    useInView(navItems[2].ref, { margin: "0px 0px -90% 0px" }),
    useInView(navItems[3].ref, { margin: "0px 0px -90% 0px" }),
    useInView(navItems[4].ref, { margin: "0px 0px -90% 0px" }),
    useInView(navItems[5].ref, { margin: "0px 0px -90% 0px" }),
    useInView(navItems[6].ref, { margin: "0px 0px -90% 0px" }),
    useInView(navItems[7].ref, { margin: "0px 0px -90% 0px" }),
  ];

  const activeSection = useMemo(() => {
    if (inViews[7]) {
      return navItems[7].ref.current?.id ?? null;
    }

    if (inViews[6]) {
      return navItems[6].ref.current?.id ?? null;
    }

    if (inViews[5]) {
      return navItems[5].ref.current?.id ?? null;
    }

    if (inViews[4]) {
      return navItems[4].ref.current?.id ?? null;
    }

    if (inViews[3]) {
      return navItems[3].ref.current?.id ?? null;
    }

    if (inViews[2]) {
      return navItems[2].ref.current?.id ?? null;
    }

    if (inViews[1]) {
      return navItems[1].ref.current?.id ?? null;
    }

    if (inViews[0]) {
      return navItems[0].ref.current?.id ?? null;
    }

    return null;
  }, [inViews, navItems]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const videoInViews = [
    useInView(navItems[0].ref, { margin: "0px 0px -60% 0px" }),
    useInView(navItems[1].ref, { margin: "0px 0px -60% 0px" }),
    useInView(navItems[2].ref, { margin: "0px 0px -60% 0px" }),
    useInView(navItems[3].ref, { margin: "0px 0px -60% 0px" }),
    useInView(navItems[4].ref, { margin: "0px 0px -60% 0px" }),
    useInView(navItems[5].ref, { margin: "0px 0px -60% 0px" }),
    useInView(navItems[6].ref, { margin: "0px 0px -60% 0px" }),
  ];

  const activeVideoSection = useMemo(() => {
    if (videoInViews[6]) {
      return navItems[6].ref.current?.id ?? null;
    }

    if (videoInViews[5]) {
      return navItems[5].ref.current?.id ?? null;
    }

    if (videoInViews[4]) {
      return navItems[4].ref.current?.id ?? null;
    }

    if (videoInViews[3]) {
      return navItems[3].ref.current?.id ?? null;
    }

    if (videoInViews[2]) {
      return navItems[2].ref.current?.id ?? null;
    }

    if (videoInViews[1]) {
      return navItems[1].ref.current?.id ?? null;
    }

    if (videoInViews[0]) {
      return navItems[0].ref.current?.id ?? null;
    }

    return null;
  }, [videoInViews, navItems]);

  return (
    <>
      <Header />
      <SecondaryNavigation
        title="Natural Capital in Daily Life"
        items={navItems}
        activeItem={activeSection}
        variant="condensed"
      />
      <div ref={navItems[0].ref} id={navItems[0].key} className="scroll-mt-[105px]">
        <Intro />
      </div>
      <div className="mb-10 lg:mb-14">
        {SECTIONS.map((section, index) => (
          <Section
            key={index}
            id={navItems[index + 1].key}
            ref={navItems[index + 1].ref}
            data={section}
            inView={navItems[index + 1].key === activeVideoSection}
            soundOn={soundOn}
            setSoundOn={setSoundOn}
          />
        ))}
      </div>
      <Outro />
      <Footer />
    </>
  );
}
