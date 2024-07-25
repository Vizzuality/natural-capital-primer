import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DayInLifeMarquee from "@/components/day-in-life-cta/marquee";
import Linkedin from "@/svgs/linkedin.svg";
import Twitter from "@/svgs/X.svg";
import Instagram from "@/svgs/instagram.svg";
import Facebook from "@/svgs/facebook.svg";

export default function ADayInTheLife() {
  const Intro = () => (
    <header className="w-full bg-black lg:h-screen">
      <div className="relative z-10">
        <Header />
      </div>
      <div className="relative mt-10 flex w-full items-center justify-center lg:absolute lg:top-[23vh] lg:mt-0 lg:h-[30vh] lg:px-20">
        <DayInLifeMarquee />
      </div>
      <div className="relative mt-10 w-full lg:absolute lg:bottom-[75px] lg:mt-0">
        <div className="mx-auto flex max-w-7xl justify-between px-6 lg:px-20">
          <div className="max-w-full text-center text-xl lg:max-w-[387px] lg:text-left">
            <span className="text-white">
              A short story about a fictional character named Julie, which{" "}
            </span>
            <span className="text-white lg:text-orange">
              highlights the everyday reliance on natural capital through the products we use.
            </span>
          </div>
          <div className="hidden w-[357px] flex-col items-end gap-5 text-white lg:flex">
            <div>Explore other pages</div>
            <div className="flex h-24 flex-col items-end justify-start gap-2">
              <div className="flex items-center gap-2">
                <Button asChild variant="outline-white" size="md">
                  <Link href="/assets">Assets</Link>
                </Button>
                <Button asChild variant="outline-white" size="md">
                  <Link href="/flows-of-services">Flows of Services</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button asChild variant="outline-white" size="md">
                  <Link href="/impacts-and-dependencies">Impacts and Dependencies</Link>
                </Button>
                <Button asChild variant="outline-white" size="md">
                  <Link href="/use-cases">Use Cases</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 flex w-full justify-center bg-black pt-8 lg:absolute lg:pt-0">
        <div className="flex flex-col items-center">
          <div className="text-orange">Scroll to discover</div>
          <span className="block h-[16.5px] w-px bg-orange" />
        </div>
      </div>
    </header>
  );

  const Outro = () => (
    <div className="flex flex-col items-center justify-center gap-10 border-t border-t-black px-6 py-20 text-black lg:px-[60px]">
      <div className="max-w-[858px] text-center text-2xl lg:text-[62px] lg:leading-[68px]">
        Understanding and valuing natural capital is crucial.
      </div>
      <div className="block text-center lg:hidden">
        By following Julie&apos;s day, we see how deeply intertwined our lives are with natural
        capital. Every product and service we rely on depends on these vital resources, highlighting
        the importance of protecting and managing them sustainably for the planetary well-being of
        current and future generations.
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="hidden lg:block">Explore the Natural Capital Primer:</div>
        <div className="block text-center lg:hidden">
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
        <Button asChild variant="icon" size="xs" className="h-11 w-11">
          <a href="/#">
            <Linkedin />
          </a>
        </Button>
        <Button asChild variant="icon" size="xs" className="h-11 w-11">
          <a href="/#">
            <Twitter />
          </a>
        </Button>
        <Button asChild variant="icon" size="xs" className="h-11 w-11">
          <a href="/#">
            <Facebook />
          </a>
        </Button>
        <Button asChild variant="icon" size="xs" className="h-11 w-11">
          <a href="/#">
            <Instagram />
          </a>
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Intro />
      <Outro />
      <Footer />
    </>
  );
}
