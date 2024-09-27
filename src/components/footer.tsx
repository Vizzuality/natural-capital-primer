"use client";

import { FC } from "react";
import Logo from "@/svgs/logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import ArrowSlideAnimation from "./animations/arrow-slide";
import LaTrobeUniversity from "@/svgs/la-trobe-university.svg";
import Vizzuality from "@/svgs/vizzuality.svg";

const Footer: FC = () => {
  return (
    <div className="bg-black text-white">
      <footer className="mx-auto grid max-w-7xl grid-cols-1 px-6 lg:grid-cols-2 lg:px-20">
        <div className="border-b border-b-white/20 py-10 lg:border-b-0 lg:py-20">
          <div className="flex max-w-[420px] flex-col gap-y-10">
            <Logo />
            <p>
              The Natural Capital Primer is a collaborative project of the Macdoch Foundation, La
              Trobe University and Vizzuality. Our team comprises experts in environmental science,
              sustainability, and communication, all dedicated to making natural capital an integral
              part of public knowledge and business practices.
            </p>
            <div className="flex items-end gap-x-8">
              <Link href="https://www.latrobe.edu.au/" rel="noopener noreferrer" target="_blank">
                <LaTrobeUniversity
                  className="relative h-auto w-[122px] lg:h-[31px]"
                  aria-label="La Trobe University"
                />
              </Link>
              <Link href="https://macdochfoundation.org/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/assets/macdoch-foundation-white.png"
                  alt="Macdoch Foundation"
                  width={93}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
        <nav className="py-10 lg:py-20" aria-label="Global">
          <ul className="grid w-fit grid-cols-2 gap-x-6">
            <li>
              <ul className="flex flex-col gap-y-2.5">
                <li>
                  <Link href="/" className="inline-block py-2 underline">
                    <ArrowSlideAnimation>Home</ArrowSlideAnimation>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="inline-block py-2 underline">
                    <ArrowSlideAnimation>About</ArrowSlideAnimation>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="inline-block py-2 underline">
                    <ArrowSlideAnimation>Terms and Conditions</ArrowSlideAnimation>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex flex-col gap-y-2.5">
                <li>
                  <Link
                    href="/natural-capital-in-daily-life"
                    className="inline-block py-2 underline"
                  >
                    <ArrowSlideAnimation>Natural Capital in Daily Life</ArrowSlideAnimation>
                  </Link>
                </li>
                <li>
                  <Link href="/key-concepts" className="inline-block py-2 underline">
                    <ArrowSlideAnimation>Key Concepts</ArrowSlideAnimation>
                  </Link>
                </li>
                <li>
                  <Link href="/industry-use-cases" className="inline-block py-2 underline">
                    <ArrowSlideAnimation>Industry Use Cases</ArrowSlideAnimation>
                  </Link>
                </li>
                <li>
                  <Link href="/climate-and-biodiversity" className="inline-block py-2 underline">
                    <ArrowSlideAnimation>Climate & Biodiversity</ArrowSlideAnimation>
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="inline-block py-2 underline">
                    <ArrowSlideAnimation>Resources</ArrowSlideAnimation>
                  </Link>
                </li>
                <li>
                  <Link href="/references" className="inline-block py-2 underline">
                    <ArrowSlideAnimation>References</ArrowSlideAnimation>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-y-3 border-t border-t-white/20 py-10 lg:col-span-2 lg:flex-row lg:gap-x-10">
          <p className="text-white/50">© Natural Capital Primer, 2024</p>
          <p className="text-white/50">
            Designed and developed by{" "}
            <Link href="https://www.vizzuality.com/" rel="noopener noreferrer" target="_blank">
              <Vizzuality
                className="inline-block h-[19px] w-[74px] text-white"
                aria-label="Vizzuality"
              />
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
