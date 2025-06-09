import { FC, useEffect, useRef, useState } from "react";
import useMediaQuery from "@/hooks/use-media-query";
import DesktopChart from "@/components/industry-use-cases/desktop-chart";
import Image from "next/image";
import { IndustryUseCasesTabContent } from "./types";

const DependenciesTab: FC<IndustryUseCasesTabContent["dependencies"] & { open: boolean }> = ({
  content1,
  chartTitle,
  chartSubTitle,
  chartData,
  open,
}) => {
  const [width, setWidth] = useState<number>(836);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useEffect(() => {
    const resizeHandler = () => {
      if (chartContainerRef.current) {
        setWidth(chartContainerRef.current.offsetWidth);
      }
    };

    if (open) {
      resizeHandler();
    }

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [open]);

  return (
    <>
      <div className="mt-5 flex flex-col gap-6 lg:items-center">{content1}</div>
      <div className="lg:pt-5">
        {isDesktop && (
          <>
            <h3 className="mx-auto max-w-[690px] text-center text-lg text-green-500 lg:text-xl">
              {chartTitle}
            </h3>
            <p className="mx-auto mt-3 max-w-[860px] text-center">{chartSubTitle}</p>
          </>
        )}
        <div ref={chartContainerRef} className="relative w-full lg:mt-9">
          {chartData.length > 0 && isDesktop && <DesktopChart width={width} data={chartData} />}
          {chartData.length > 0 && !isDesktop && (
            <div className="relative aspect-[21/10]">
              <Image
                src="/assets/industry-cases-dependencies-mobile.svg"
                alt="Switch to desktop for full insights."
                fill
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DependenciesTab;
