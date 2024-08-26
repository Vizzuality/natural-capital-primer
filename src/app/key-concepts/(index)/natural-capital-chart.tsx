import InfoTooltip from "@/components/info-tooltip";
import NaturalCapitalChartSvg from "@/svgs/natural-capital-chart.svg";

const NaturalCapitalChart = () => {
  return (
    <div className="text-white">
      <div className="flex items-center gap-[10px]">
        <div className="text-4xl">Natural Capital Assets</div>
        <InfoTooltip theme="dark" content="TBD" />
      </div>
      <NaturalCapitalChartSvg />
    </div>
  );
};

export default NaturalCapitalChart;
