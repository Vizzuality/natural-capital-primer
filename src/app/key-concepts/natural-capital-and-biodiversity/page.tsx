import Footer from "@/components/footer";
import Header from "@/components/header";
import Caret from "@/icons/caret-right.svg";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import AnimatedUnderline from "@/components/animations/animated-underline";
export const metadata: Metadata = {
  title: "Natural Capital and Biodiversity",
};

export default function Biodiversity() {
  return (
    <>
      <div className="h-[430px] w-full bg-[url(/assets/biodiversity-hero-background.png)] bg-cover bg-no-repeat pb-10 lg:h-[642px] lg:bg-[url(/assets/key-concepts-biodiversity-background.png)] lg:pb-20">
        <div className="relative z-10">
          <Header logo="white" />
        </div>
      </div>
      <div className="-mt-[270px] pr-6 lg:pr-20 xl:w-[calc(100vw_-_((100vw_-_1280px)_/_2)_-_80px)] xl:pr-36">
        <main className="flex items-center bg-black px-6 py-4 lg:px-20 lg:py-6 xl:pl-[calc((100vw_-_1280px)_/_2_+_80px)]">
          <div className="flex flex-col gap-y-2 sm:flex-row sm:items-center sm:gap-x-3">
            <Link href="/key-concepts#role" className="flex items-center gap-3">
              <Caret className="h-3 text-white" />
              <AnimatedUnderline className="text-lg text-white">Back to content</AnimatedUnderline>
            </Link>
            <span className="hidden h-4 border border-r-white/15 sm:block"></span>
            <div className="text-lg text-pink">Natural Capital and Biodiversity</div>
          </div>
        </main>
        <main className="flex flex-col gap-6 bg-pink px-6 py-10 lg:px-20 lg:py-20 xl:pl-[calc((100vw_-_1280px)_/_2_+_80px)]">
          <h1 className="text-2xl lg:text-4xl">
            Biodiversity has a special relationship with natural capital
          </h1>
          <div className="text-black">
            Biodiversity It is part of natural capital, it benefits from other aspects of natural
            capital and it is fundamental to generating many of the ecosystem services that flow
            from natural capital. It is at once a subset of natural capital yet it is fundamental to
            growing natural capital and generating ecosystem services.
          </div>
          <div className="w-full border-t border-t-black"></div>
          <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-10">
            <div>
              <div className="font-bold">Natural Capital</div>
              <div>
                Natural capital encompasses the entirety of Earth&apos;s natural resources and
                ecosystems, including both living (biotic) and non-living (abiotic) components.
              </div>
            </div>
            <div>
              <div className="font-bold">Biodiversity</div>
              <div>
                Biodiversity specifically refers to the variety of life forms within ecosystems,
                encompassing genetic diversity, species diversity, and ecosystem diversity.
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-20 lg:py-14">
        <div className="flex flex-col items-start gap-10 pb-10 lg:gap-20 lg:pb-20">
          <div className="flex w-full flex-col gap-6 self-start text-black">
            <div className="text-lg">Natural Capital and Biodiversity</div>
            <div className="pb-20 text-2xl tracking-tight lg:max-w-[799px] lg:pb-[112px] lg:text-4xl">
              Biodiversity builds natural capital, through processes like:
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-9 lg:flex-row">
              <figure className="relative">
                <Image
                  alt="Photosyntesis"
                  src="/assets/key-concepts-biodiversity-illustration.png"
                  width={347}
                  height={357}
                  className="h-[224px] w-[227px] xl:h-[357px] xl:min-h-[357px] xl:w-[347px] xl:min-w-[347px]"
                />
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <figcaption className="h-11 rounded-[40px] bg-black/80 px-5 py-2.5 text-center text-white lg:h-14 lg:px-6 lg:py-4">
                    Photosynthesis
                  </figcaption>
                </div>
              </figure>
              <figure className="relative">
                <Image
                  alt="Water cycling"
                  src="/assets/key-concepts-biodiversity-illustration-2.png"
                  width={347}
                  height={357}
                  className="h-[224px] w-[227px] xl:h-[357px] xl:min-h-[357px] xl:w-[347px] xl:min-w-[347px]"
                />
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <figcaption className="h-11 rounded-[40px] bg-black/80 px-5 py-2.5 text-center text-white lg:h-14 lg:px-6 lg:py-4">
                    Water cycling
                  </figcaption>
                </div>
              </figure>
              <figure className="relative">
                <Image
                  alt="Soil formation"
                  src="/assets/home-pebble-1.png"
                  width={347}
                  height={357}
                  className="h-[224px] w-[227px] xl:h-[357px] xl:min-h-[357px] xl:w-[347px] xl:min-w-[347px]"
                />
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <figcaption className="h-11 rounded-[40px] bg-black/80 px-5 py-2.5 text-center text-white lg:h-14 lg:px-6 lg:py-4">
                    Soil formation
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-col items-center gap-6 lg:w-[559px] lg:gap-20"></div>
          </div>
          <div className="w-full bg-pink bg-cover p-6 py-10 lg:bg-[url(/assets/key-concepts-biodiversity-background-2.png)] lg:p-10 lg:bg-blend-luminosity">
            <div className="flex flex-col gap-[25px]">
              <div className="max-w-[790px] text-2xl lg:text-4xl">
                However, natural capital is more than just biodiversity.
              </div>
              <div className="flex max-w-[790px] flex-col gap-2">
                <p>
                  It includes the emergent properties that arise from the interaction of species and
                  the combination of ecosystem and abiotic resources and also the structures,
                  functions, and processes of ecosystems that support human well-being and economic
                  activities.
                </p>
                <p className="font-bold">Example of natural capital, biodiversity and beyond</p>
                <p>
                  Ecosystem services such as pollination, pest control, and the production of food
                  and fiber depend directly on biodiversity.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 self-start text-black max-lg:pb-5 lg:max-w-[799px]">
            <div className="text-2xl tracking-tight lg:max-w-[737px] lg:text-4xl">
              We need to protect both for sustainability for two reasons:
            </div>
          </div>
          <div className="flex flex-col justify-start gap-y-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16">
            <div className="flex-shrink-0 lg:w-[220px]" />
            <div className="flex flex-grow flex-col gap-10 lg:max-w-[559px]">
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-4.2xl text-pink lg:text-5xl">01</div>
                <div className="text-2xl lg:text-4xl">
                  Resilience to
                  <br />
                  environmental changes
                </div>
                <div className="flex flex-col gap-4">
                  <p>
                    Protecting biodiversity is essential for maintaining natural capital and
                    ensuring the resilience of ecosystems to environmental changes.
                  </p>
                  <p>
                    Resilience refers to the ability of a system to withstand and/or recover from
                    shocks and pressures, such as drought, fire, flood or disease.
                  </p>
                </div>
              </div>
              <div className="flex w-full gap-6">
                <div className="w-1.5 bg-pink" />
                <div className="max-w-[510px] grow basis-0">
                  Sustainable management practices should consider both the conservation of
                  biodiversity and the sustainable use of natural resources to promote long-term
                  environmental and economic sustainability.
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-4.2xl text-pink lg:text-5xl">02</div>
                <div className="text-2xl lg:text-4xl">Well-defined and measurable attributes</div>
                <div>
                  Biodiversity has well-defined and measurable attributes (e.g., the number of
                  species present, the amount of genetic variability in a population, or the
                  diversity of species that perform the same or similar functions) that are
                  indicators of the resilience of ecosystem assets.
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="-mx-6 flex flex-col justify-start gap-y-6 border-t border-dashed border-t-black p-6 lg:-mx-20 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20 lg:pt-20">
          <p className="hidden flex-shrink-0 lg:block lg:w-[220px]">
            Natural Capital and Biodiversity
          </p>
          <div className="flex flex-grow flex-col gap-10">
            <div className="flex items-center gap-3">
              <h2>Key insights about this chapter</h2>
              <div className="grow border-t border-t-grey-500"></div>
            </div>
            <ol className="flex max-w-[540px] list-decimal-leading-zero flex-col gap-y-6 pl-9 lg:gap-y-5">
              <li>
                Biodiversity is essential within natural capital, playing a vital role in ecosystem
                services such as pollination and pest control.
              </li>
              <li>
                Natural capital goes beyond biodiversity, encompassing all of Earth&apos;s resources
                and ecosystems, both living and non-living, which are crucial for ecosystem
                functions.
              </li>
              <li>
                Safeguarding biodiversity and sustainably managing natural resources are crucial for
                maintaining ecosystem strength over time, ensuring our environment and economy
                thrive in the long run.
              </li>
            </ol>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
