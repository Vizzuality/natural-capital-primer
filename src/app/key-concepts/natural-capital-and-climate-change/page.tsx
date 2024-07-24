import Footer from "@/components/footer";
import Header from "@/components/header";
import Caret from "@/icons/caret-right.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MarqueeText from "@/components/marquee-text";
import ImageCarousel from "@/components/image-carousel";

export default function ClimateChange() {
  return (
    <>
      <div className="h-[430px] w-full bg-[url(/assets/climate-change-hero-background.png)] bg-cover bg-no-repeat pb-10 lg:h-[642px] lg:bg-[url(/assets/climate-change-hero-background.png)] lg:pb-20">
        <div className="relative z-10">
          <Header logo="white" />
        </div>
      </div>
      <main className="-mt-[270px] pr-6 lg:max-w-[1035px] lg:pr-20">
        <div className="-mt-[270px] flex h-[88px] items-center bg-grey-800 pr-6 md:h-[69px] lg:pl-14 xl:w-[calc(100vw_-_((100vw_-_1280px)_/_2)_-_60px)] xl:pl-[calc((100vw_-_1280px)_/_2_+_60px)]">
          <div className="flex w-full flex-wrap items-center gap-3 max-lg:pl-6">
            <Link href="/key-concepts" className="flex items-center gap-3">
              <Caret className="h-3 text-white" />
              <div className="text-lg text-white">Back to content</div>
            </Link>
            <span className="lg:border-r-white/12 h-4 lg:border"></span>
            <div className="text-lg text-sky">Natural Capital and Climate Change</div>
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-sky p-6 lg:px-[60px] lg:pl-14 xl:w-[calc(100vw_-_((100vw_-_1280px)_/_2)_-_60px)] xl:pl-[calc((100vw_-_1280px)_/_2_+_60px)]">
          <div className="text-2xl lg:text-4xl">
            The link between natural capital and climate change is inex​tricable.
          </div>
          <div className="text-grey-800">
            We will not achieve net zero emissions without actions that build natural capital (and
            biodiversity), and we cannot build natural capital while consuming resources
            (non-renewable and renewable) at a rate that maintains or exacerbates the climate
            crisis. This inter-dependence is at once both the greatest risk to the planet and the
            potential solution.
          </div>
        </div>
      </main>
      <div className="mx-auto max-w-7xl bg-white px-6 py-10 text-grey-800 lg:px-[60px] lg:py-20">
        <div className="flex flex-col items-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-6 self-start text-grey-800 lg:max-w-[799px]">
            <div className="text-lg">Natural Capital and Climate Change</div>
            <div className="text-2xl tracking-tight lg:text-4xl">
              Nature-based strategies are the key to fighting both the climate and biodiversity
              extinction crises through:
            </div>
          </div>
          <div className="w-full lg:pl-[308px]">
            <div className="flex flex-col gap-6 lg:max-w-[559px] lg:gap-20">
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-[52px] leading-[48px] text-sky lg:text-5xl">01</div>
                <div className="text-2xl lg:text-4xl">Reducing emissions</div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-[52px] leading-[48px] text-sky lg:text-5xl">02</div>
                <div className="text-2xl lg:text-4xl">Sequestering carbon</div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-[52px] leading-[48px] text-sky lg:text-5xl">03</div>
                <div className="text-2xl lg:text-4xl">Growing our natural capital asset base</div>
              </div>
              <div className="flex w-full gap-6">
                <div className="w-1.5 bg-sky" />
                <div className="max-w-[510px] grow basis-0">
                  Such actions are usually mutualistic –building natural capital increases carbon
                  sequestration and vice-versa – but care is needed to guard against perverse
                  outcomes where this may not occur.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-sky bg-cover p-6 py-10 lg:bg-[url(/assets/climate-change-background-imperative.png)] lg:p-10">
            <div className="flex flex-col gap-[25px]">
              <div className="max-w-[790px] text-balance text-2xl lg:text-4xl">
                It is imperative that businesses recognise and respond to this inter-dependence.
              </div>
              <div className="max-w-[790px]">
                <p>
                  To do so, they need to explicitly document their climate and nature-related
                  dependencies and impacts, and understand the links between the two.
                </p>
                <p>
                  Importantly, failure to consider and include natural capital in climate strategies
                  will ultimately be ineffective in improving their climate position and expose the
                  business to significant climate and nature-related risk.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between gap-10 max-lg:flex-wrap-reverse">
            <div className="flex h-fit min-w-[394px] gap-6 text-grey-800">
              <div className="w-1.5 min-w-1.5 bg-sky" />
              <div className="max-w-[364px]">
                Balancing economic growth with environmental sustainability and biodiversity
                conservation is a pressing challenge that demands collaborative and proactive
                solutions.
              </div>
            </div>
            <div className="max-w-[540px] text-2xl lg:text-4xl">
              Continuous research, policy development, and innovative business practices are crucial
              to better incorporate natural capital into climate strategies.
            </div>
          </div>
          <div className="relative mb-10 w-full overflow-hidden bg-black p-20 text-white lg:mb-20">
            <div className="relative flex flex-col items-center gap-[25px]">
              <ImageCarousel
                images={[
                  {
                    src: "/assets/product-story-1.png",
                  },
                  {
                    src: "/assets/product-story-2.png",
                  },
                  {
                    src: "/assets/product-story-3.png",
                  },
                  {
                    src: "/assets/product-story-4.png",
                  },
                ]}
                alt=""
                width={347}
                height={357}
                className="mb-6 h-[224px] w-[227px] lg:mb-0 xl:h-[357px] xl:min-h-[357px] xl:w-[347px] xl:min-w-[347px]"
              />
              <div className="max-w-[650px] text-center text-xl tracking-tight">
                A short story which highlights the everyday reliance on natural capital through the
                products we use.
              </div>
              <Button asChild variant="white" className="w-[200px] text-center">
                <a href="/key-concepts/product-story">Discover the Story</a>
              </Button>
            </div>
            <MarqueeText
              text="A Day in the Life ⎯ A Day in the Life ⎯ A Day in the Life"
              className="absolute top-44 text-[85px]"
            />
          </div>
        </div>
        <div className="-mx-6 border-t border-dashed border-t-grey-800 p-6 lg:mx-0 lg:pb-0 lg:pt-20">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-x-16">
            <div className="hidden w-[220px] flex-shrink-0 text-lg lg:block">
              Natural Capital and Climate Change
            </div>
            <div className="flex flex-grow flex-col gap-10">
              <div className="flex items-center gap-3">
                <div>Key insights about this chapter</div>
                <div className="grow border-t border-t-grey-500"></div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-3 lg:w-[540px]">
                  <div>01.</div>
                  <div>
                    Achieving net zero emissions and enhancing natural capital (like biodiversity)
                    are closely linked goals essential for effectively addressing climate change.
                  </div>
                </div>
                <div className="flex gap-3 lg:w-[540px]">
                  <div>02.</div>
                  <div>
                    Nature-based strategies not only help combat climate change but also support
                    biodiversity. It’s crucial to ensure these actions benefit each other without
                    unintended consequences.
                  </div>
                </div>
                <div className="flex gap-3 lg:w-[540px]">
                  <div>03.</div>
                  <div>
                    Businesses need to recognize and manage their dependencies on natural resources.
                    Understanding these connections is crucial for effective climate strategies and
                    mitigating business and societal risks related to climate change and
                    biodiversity loss.
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
