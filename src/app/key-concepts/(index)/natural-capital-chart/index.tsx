import { useEffect, useRef, useState } from "react";
import InfoTooltip from "@/components/info-tooltip";
import NaturalCapitalChartSvg from "./chart-svg";

const NaturalCapitalChart = () => {
  const [width, setWidth] = useState<number>(1106);
  const chartContainerRef = useRef<HTMLDivElement>(null);

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
    <div className="flex flex-col gap-10 text-white">
      <div className="flex items-center justify-center gap-[10px]">
        <div className="text-4xl">Natural Capital Assets</div>
        <InfoTooltip
          theme="dark"
          content="Biotic and abiotic assets in an ecosystem that can be described in terms of their extant and condition."
        />
      </div>
      <div ref={chartContainerRef}>
        <NaturalCapitalChartSvg width={width} />
      </div>
      <div className="flex items-center justify-center gap-[10px]">
        <div className="text-4xl">Flow of services</div>
        <InfoTooltip
          theme="dark"
          content="The products or processes arising from nature that are of benefit and value to human society."
        />
      </div>
    </div>
  );
};

export default NaturalCapitalChart;