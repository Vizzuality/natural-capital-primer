"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Linkedin from "@/svgs/linkedin.svg";
import Twitter from "@/svgs/X.svg";
import Instagram from "@/svgs/instagram.svg";
import Facebook from "@/svgs/facebook.svg";

const Outro = () => (
  <div className="flex flex-col items-center justify-center gap-10 border-t border-t-black px-6 py-20 text-black lg:px-[60px]">
    <div className="lg:text-4.5xl max-w-[858px] text-center text-2xl tracking-tight">
      Understanding and valuing natural capital is crucial.
    </div>
    <div className="max-w-[830px] text-center">
      By following Julie&apos;s day, we see how deeply intertwined our lives are with natural
      capital. Every product and service we rely on depends on these vital resources, highlighting
      the importance of protecting and managing them sustainably for the planetary well-being of
      current and future generations.
    </div>
    <div className="flex flex-col items-center gap-10">
      <div className="text-center">
        Dive deeper into the Natural Capital Primer to understand key concepts:
      </div>
      <div className="flex flex-col gap-2 lg:flex-row">
        <Button asChild variant="outline" size="md">
          <Link href="/assets">Assets</Link>
        </Button>
        <Button asChild variant="outline" size="md">
          <Link href="/flows-of-services">Flows of Services</Link>
        </Button>
        <Button asChild variant="outline" size="md">
          <Link href="/impacts-and-dependencies">Impacts and Dependencies</Link>
        </Button>
        <Button asChild variant="outline" size="md">
          <Link href="/use-cases">Use Cases</Link>
        </Button>
      </div>
    </div>
    <div className="inline-flex items-end gap-5">
      <Button asChild variant="icon" className="h-11 w-11">
        <a href="/#">
          <Linkedin />
        </a>
      </Button>
      <Button asChild variant="icon" className="h-11 w-11">
        <a href="/#">
          <Twitter />
        </a>
      </Button>
      <Button asChild variant="icon" className="h-11 w-11">
        <a href="/#">
          <Facebook />
        </a>
      </Button>
      <Button asChild variant="icon" className="h-11 w-11">
        <a href="/#">
          <Instagram />
        </a>
      </Button>
    </div>
  </div>
);

export default Outro;