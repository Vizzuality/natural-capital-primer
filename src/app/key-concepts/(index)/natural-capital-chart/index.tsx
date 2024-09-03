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
    <div className="flex flex-col gap-6 text-white lg:gap-10">
      <div className="flex items-center justify-center gap-2.5">
        <div className="text-2xl lg:text-4xl">
          <span className="sr-only lg:not-sr-only">Natural Capital </span>Assets
        </div>
        <InfoTooltip
          theme="dark"
          content="Biotic and abiotic assets in an ecosystem that can be described in terms of their extant and condition."
        />
      </div>
      <div ref={chartContainerRef}>
        {isMd && <DesktopChart width={width} />}
        {!isMd && <MobileChart width={width} />}
      </div>
      <div className="flex items-center justify-center gap-2.5">
        <div className="text-2xl lg:text-4xl">Flow of services</div>
        <InfoTooltip
          theme="dark"
          content="The products or processes arising from nature that are of benefit and value to human society."
        />
      </div>
    </div>
  );
};

export default NaturalCapitalChart;
