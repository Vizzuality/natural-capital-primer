import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useMediaQuery from "@/hooks/use-media-query";
import DesktopChart from "@/components/industry-use-cases/desktop-chart";
import MobileChart from "@/components/industry-use-cases/mobile-chart";
import { IndustryUseCasesTabContent } from "./types";

const DependenciesTab: FC<IndustryUseCasesTabContent["dependencies"] & { open: boolean }> = ({
  content1,
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
      <div className="mt-5 flex flex-col gap-6 px-6 lg:gap-5 lg:px-0">{content1}</div>
      <div className="px-6 lg:px-0">
        <div ref={chartContainerRef} className="relative w-full">
          {chartData.length === 0 && (
            <>
              <Image
                className="mx-6 w-[calc(100%-48px)] max-lg:object-contain max-lg:pb-10 max-lg:pt-12 lg:mx-0 lg:min-h-[388px] lg:w-full"
                src="/assets/industry-cases-construction-dependencies-wip.png"
                alt=""
                width={830}
                height={583}
              />
              <div className="absolute inset-0 left-12 top-1/2 h-fit w-full -rotate-12 text-3xl">
                Interactive chart coming soon
              </div>
            </>
          )}
          {chartData.length > 0 && isDesktop && <DesktopChart width={width} data={chartData} />}
          {chartData.length > 0 && !isDesktop && <MobileChart data={chartData} />}
        </div>
      </div>
    </>
  );
};

export default DependenciesTab;
