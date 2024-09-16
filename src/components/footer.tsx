"use client";

import { FC } from "react";
import Logo from "@/svgs/logo-normal.svg";
import Image from "next/image";
import Link from "next/link";
import ArrowSlideAnimation from "./animations/arrow-slide";

const Footer: FC = () => {
  return (
    <div className="bg-black text-white">
      <footer className="mx-auto grid max-w-7xl grid-cols-1 px-6 lg:grid-cols-2 lg:px-20">
        <div className="border-b border-b-white/20 py-10 lg:border-b-0 lg:border-r lg:border-r-white/20 lg:py-20 lg:pr-14">
          <div className="flex max-w-[420px] flex-col gap-y-10">
            <Logo />
            <p>
              The Natural Capital Primer is a collaborative project by the Macdoch Foundation and La
              Trobe University. Our team comprises experts in environmental science, sustainability,
              and communication, all dedicated to making natural capital an integral part of public
              knowledge and business practices.
            </p>
            <div className="flex items-end gap-x-8">
              <Link href="https://www.latrobe.edu.au/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/assets/la-trobe-university-white.png"
                  alt="La Trobe University"
                  width={122}
                  height={31}
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
            <p className="hidden opacity-50 lg:block">© Natural Capital Primer, 2024</p>
          </div>
        </div>
        <nav className="py-10 lg:py-20 lg:pl-14" aria-label="Global">
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
        <p className="border-t border-t-white/20 py-10 opacity-50 lg:hidden">
          © Natural Capital Primer, 2024
        </p>
      </footer>
    </div>
  );
};

export default Footer;
