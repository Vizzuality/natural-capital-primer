import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DayInLifeMarquee from "@/components/day-in-life-cta/marquee";

export default function ADayInTheLife() {
  return (
    <>
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
      <Footer />
    </>
  );
}