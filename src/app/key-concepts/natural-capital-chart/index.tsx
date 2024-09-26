"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import InfoTooltip from "@/components/info-tooltip";
import DesktopChart from "./desktop-chart";
import MobileChart from "./mobile-chart";

const NaturalCapitalChart = () => {
  const [width, setWidth] = useState<number>(1106);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const isMd = useMemo(() => width >= 768, [width]);

  useEffect(() => {
    const resizeHandler = () => {
      if (chartContainerRef.current) {
        setWidth(chartContainerRef.current.offsetWidth);
      }
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <div className="flex flex-col gap-10 lg:gap-16">
      <div className="mx-auto max-w-[730px] lg:text-center">
        <h3 className="text-2xl text-blue-500 lg:text-4xl">Assets flow into services.</h3>
        <p className="mt-3">
          Hover on the different elements to see how natural capital assets produce flows of
          services.
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-center gap-2.5 md:relative md:left-[9.1%] md:justify-start">
          <div className="text-xl">Natural Capital Assets</div>
          <InfoTooltip content="Biotic and abiotic assets in an ecosystem that can be described in terms of their extant and condition." />
        </div>
        <div ref={chartContainerRef}>
          {isMd && <DesktopChart width={width} />}
          {!isMd && <MobileChart width={width} />}
        </div>
        <div className="flex items-center justify-center gap-2.5 md:justify-start">
          <div className="text-xl">Flow of services</div>
          <InfoTooltip content="The products or processes arising from nature that are of benefit and value to human society." />
        </div>
      </div>
    </div>
  );
};

export default NaturalCapitalChart;
