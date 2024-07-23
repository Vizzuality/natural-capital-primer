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
      <div className="h-[642px] w-full bg-[url(/assets/climate-change-hero-background.png)] bg-cover bg-no-repeat pb-10 lg:bg-[url(/assets/climate-change-hero-background.png)] lg:pb-20">
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
            <div className="text-lg text-sky">Natural Capital and Climate Change</div>
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-sky p-6 lg:px-[60px] lg:py-20">
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
      <div className="mx-auto max-w-7xl bg-white px-6 py-10 text-grey-800 lg:px-[60px] lg:py-14">
        <div className="flex flex-col items-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-6 self-start text-grey-800 lg:max-w-[799px]">
            <div className="text-lg">Natural Capital and Climate Change</div>
            <div className="text-2xl tracking-tight lg:text-4xl">
              Nature-based strategies are the key to fighting both the climate and biodiversity
              extinction crises through:
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex flex-col items-center gap-6 lg:w-[559px] lg:gap-20">
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
          <div className="flex w-full flex-wrap-reverse justify-between gap-10 lg:mb-20">
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
          <div className="relative mb-10 w-full overflow-hidden bg-black p-20 text-white lg:m-20">
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
                alt="Product Story"
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
            {/* <div
              className="absolute inset-0 h-full w-full"
              style={{
                background: "url(/assets/product-mask.png) no-repeat",
                // WebkitMaskImage: "url(/assets/product-mask.png)",
                // WebkitMaskSize: "100% 100%",
                // WebkitMaskClip: "border-box",
                // maskImage: "url(/assets/product-mask.png)",
                // maskSize: "100% 100%",
                // maskClip: "border-box",
              }}
            > */}
            <MarqueeText
              text="A Day in the Life ⎯ A Day in the Life ⎯ A Day in the Life"
              className="absolute top-44 text-[85px]"
            />
            {/* <svg
              height="0"
              width="0"
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 219 221"
              width="219"
              height="221"
            >
              <title>product-mask</title>
              <defs>
                <clipPath id="svgPath">
                  <image
                    width="217"
                    height="219"
                    id="img1"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADbAQMAAADauKY+AAAAAXNSR0IB2cksfwAAAAZQTFRFAAAA////pdmf3QAAAAJ0Uk5TAP9bkSK1AAAC/klEQVR4nM2ZXW7bMBCEzSRA/ZbeoL5Jc60+2b5Zc5P4Bu1bAzRxKe4uuSRn1oUFp9VDBOWDxJ3h6ofjtHHb/tvWH26SZ4fN2wOBn37lPz8/Y5hPzNvxgGB6L7vXLYKPP2TvTm3w6/fNeGqDZzDSMGRXcIVFiFziboJfXurVnp9GaPX4kircNwX1ugZbPe66Bu9/O2j1GmzFuusaNPNkUwsNOiVtUINOSRvU4NkzawiFnZL6b4WdklqRwk5J3k47B3slVpHCXol5r7BXYuUqdHPiylV4HpiUK3BUogYKHJWoFoGjEtUicFSiWgSOSjo4KRGhAicl0iki9n2CBRQ4yxQXCpxlOjjLFIsKnGWKRQXOMh2cZYp/Bc4yG0Qyi38LRDIrRDKLuQtEMitEMovzC0QyK0QyC1kgkmkQyizTcglCDwxCD8qEJuKBQeiBQehBme1LEBukEBsUw9wniRkkkBgUw9xEibknkLj3F5BYG8Pcmxcg8X0tJDO2tPwaSKZzJWSNsNxjKyDrkpWQ9dcFeDzEkDXfSsiabw18fooh68xbQta2y4Po/4Psbliebx8PX7e3gtyEt4ePh+e7oIeuh/kxdCPI77IYHm8F+aPmn8AUPFJvB/nbIYS5h66H/EWXO/56SF/Ly817JcyPmhjSGzSE+alJP3limN8OMaQtn9+CHKbg065A1rjleyiErP3Kp134fRt+GYff1KxPTrsAysKCzHYIZaVDZltWVxjqog1PqK4F8bSEUNefeFp0WYudP+0CqItw7Lwu37G5lgog/2qegCyqSQSCNcNA/tVohCUGdBFe4xiWUtCFf4uASGzCkgiXLJGohqUfLs0i2RGLYyS2IymPz97GijQqxJlUF+mNFWmyqRcfOkWKJfFanzEONvTp5DBo6nfdoBZIWzrZDWoxLAw9tdgKu0HDFDYNe+/9FO7GsbDz3upp0A1aA3CQcLdMfs7GUcLdBm2x+pTH41Td7IV5vNqLk3wVg38DkOuyXw/KzPjj/mB/OO388R8/BJDrcSjjzQAAAABJRU5ErkJggg=="
                  />
                </clipPath>
              </defs>
            </svg> */}
            {/* <div
              className="absolute inset-0 z-50 h-[224px] w-[227px] bg-sky mix-blend-multiply xl:h-[357px] xl:min-h-[357px] xl:w-[347px] xl:min-w-[347px]"
              style={{
                mask: "url(/assets/product-mask.svg) center/contain no-repeat",
                maskComposite: "subtract",
              }}
            /> */}
            {/* </div> */}
          </div>
        </div>
        <div className="border-t border-dashed border-grey-800 pt-6 lg:pb-6 lg:pt-20">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-[43px]">
            <div className="w-[251px] text-lg">Natural Capital and Climate Change</div>
            <div className="flex grow flex-col gap-10">
              <div className="flex items-center gap-3">
                <div>Key insights about this chapter</div>
                <div className="grow border border-grey-500"></div>
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
