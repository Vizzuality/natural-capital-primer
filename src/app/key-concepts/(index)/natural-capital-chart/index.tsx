import { useEffect, useRef, useState } from "react";
import InfoTooltip from "@/components/info-tooltip";
import NaturalCapitalChartSvg from "./chart-svg";

const NaturalCapitalChart = () => {
  const [width, setWidth] = useState<number | undefined>();
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
        <InfoTooltip theme="dark" content="TBD" />
      </div>
      <div ref={chartContainerRef}>
        <NaturalCapitalChartSvg width={width} />
      </div>
      <div className="flex items-center justify-center gap-[10px]">
        <div className="text-4xl">Flow of services</div>
        <InfoTooltip theme="dark" content="TBD" />
      </div>
    </div>
  );
};

export default NaturalCapitalChart;
