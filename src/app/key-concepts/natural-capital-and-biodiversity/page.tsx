import Footer from "@/components/footer";
import Header from "@/components/header";
import Caret from "@/icons/caret-right.svg";
import Link from "next/link";
import Image from "next/image";

export default function Biodiversity() {
  return (
    <>
      <div className="h-[642px] w-full bg-[url(/assets/biodiversity-hero-background.png)] bg-cover bg-no-repeat pb-10 lg:bg-[url(/assets/biodiversity-hero-background.png)] lg:pb-20">
        <div className="relative z-10">
          <Header logo="white" />
        </div>
      </div>
      <main className="-mt-[270px] max-w-[90%] lg:max-w-[1035px]">
        <div className="flex h-[88px] items-center bg-grey-800 md:h-[69px]">
          <div className="flex w-full flex-wrap items-center gap-3 pl-6 lg:pl-[60px]">
            <Link href="/key-concepts" className="flex items-center gap-3">
              <Caret className="h-3 text-white" />
              <div className="text-lg text-white">Back to content</div>
            </Link>
            <span className="border-r-white/12 h-4 border"></span>
            <div className="text-lg text-pink">Natural Capital and Biodiversity</div>
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-pink p-6 lg:px-[60px] lg:py-20">
          <div className="text-2xl lg:text-4xl">
            Biodiversity has a special relationship with natural capital.
          </div>
          <div className="text-grey-800">
            Biodiversity It is part of natural capital, it benefits from other aspects of natural
            capital and it is fundamental to generating many of the ecosystem services that flow
            from natural capital. It is at once a subset of natural capital yet it is fundamental to
            growing natural capital and generating ecosystem services.
          </div>
          <div className="w-full border border-grey-800"></div>
          <div className="flex flex-col gap-10 lg:flex-row">
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
        </div>
      </main>
      <div className="mx-auto max-w-7xl bg-white px-6 py-6 text-grey-800 lg:px-[60px] lg:py-14">
        <div className="flex flex-col items-center gap-10 pb-6 lg:gap-20 lg:pb-20">
          <div className="flex w-full flex-col gap-6 self-start text-grey-800">
            <div className="text-lg">Natural Capital and Biodiversity</div>
            <div className="pb-20 text-2xl tracking-tight lg:max-w-[799px] lg:pb-[112px] lg:text-4xl">
              Biodiversity builds natural capital, through processes like:
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-9 lg:flex-row">
              <figure className="relative">
                <Image
                  alt="Photosyntesis"
                  src="/assets/photosyntesis.png"
                  width={347}
                  height={357}
                  className="h-[224px] w-[227px] xl:h-[357px] xl:min-h-[357px] xl:w-[347px] xl:min-w-[347px]"
                />
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <figcaption className="h-14 rounded-[40px] bg-grey-800/80 px-6 py-4 text-center text-white">
                    Photosynthesis
                  </figcaption>
                </div>
              </figure>
              <figure className="relative">
                <Image
                  alt="Water cycling"
                  src="/assets/water-cycling.png"
                  width={347}
                  height={357}
                  className="h-[224px] w-[227px] xl:h-[357px] xl:min-h-[357px] xl:w-[347px] xl:min-w-[347px]"
                />
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <figcaption className="h-14 rounded-[40px] bg-grey-800/80 px-6 py-4 text-center text-white">
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
                  <figcaption className="h-14 rounded-[40px] bg-grey-800/80 px-6 py-4 text-center text-white">
                    Soil formation
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-col items-center gap-6 lg:w-[559px] lg:gap-20"></div>
          </div>
          <div className="w-full bg-pink bg-cover p-6 py-10 lg:bg-[url(/assets/climate-change-background-imperative.png)] lg:p-10 lg:bg-blend-luminosity">
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
          <div className="flex flex-col gap-6 self-start text-grey-800 max-lg:pb-5 lg:max-w-[799px]">
            <div className="text-2xl tracking-tight lg:max-w-[737px] lg:text-4xl">
              We need to protect both for sustainability for two reasons:
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-col items-center gap-10 lg:w-[559px] lg:gap-20">
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-[52px] leading-[48px] text-pink lg:text-5xl">01</div>
                <div className="text-2xl lg:text-4xl">Resilience to environmental changes</div>
                <div>
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
                <div className="text-[52px] leading-[48px] text-pink lg:text-5xl">02</div>
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
        <div className="lg:ox-0 -mx-6 border-t border-dashed border-grey-800 px-6 py-6 lg:mx-0 lg:pt-20">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-[43px]">
            <div className="hidden w-[251px] text-lg lg:block">
              Natural Capital and Biodiversity
            </div>
            <div className="flex grow flex-col gap-10">
              <div className="flex items-center gap-3">
                <div>Key insights about this chapter</div>
                <div className="grow border border-grey-500"></div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-3 lg:w-[540px]">
                  <div>01.</div>
                  <div>
                    Biodiversity is essential within natural capital, playing a vital role in
                    ecosystem services such as pollination and pest control.
                  </div>
                </div>
                <div className="flex gap-3 lg:w-[540px]">
                  <div>02.</div>
                  <div>
                    Natural capital goes beyond biodiversity, encompassing all of Earth&apos;s
                    resources and ecosystems, both living and non-living, which are crucial for
                    ecosystem functions.
                  </div>
                </div>
                <div className="flex gap-3 lg:w-[540px]">
                  <div>03.</div>
                  <div>
                    Safeguarding biodiversity and sustainably managing natural resources are crucial
                    for maintaining ecosystem strength over time, ensuring our environment and
                    economy thrive in the long run.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
