import { useEffect, useState } from "react";
import { select, selectAll } from "d3-selection";
import { relationships } from "./data";
import { linkVertical, DefaultLinkObject } from "d3-shape";

type Node = SVGGraphicsElement;
type NodePosition = {
  id: string;
  type: string | null;
  position: number[];
};

interface Link extends DefaultLinkObject {
  sourceName: string;
  targetName: string;
}

export const GREY = "#d7d8d3";

// Function to invert object keys and values
const invert = (obj: { [key: string]: string[] }) =>
  Object.entries(obj).reduce(
    (acc, [key, values]) => {
      values.forEach((value) => {
        if (!acc[value]) {
          acc[value] = [];
        }
        acc[value].push(key);
      });
      return acc;
    },
    {} as { [key: string]: string[] },
  );

export const useHovered = (svgElement: SVGSVGElement | null) => {
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    if (!svgElement) {
      return;
    }

    if (!hovered) {
      // Clear links
      select(svgElement)
        .select("#links")
        .selectAll("path")
        .attr("class", "transition-all stroke-black/15");

      // Clear node name
      selectAll(".node-name").remove();
    } else {
      const linksElement = select(svgElement).select("#links");
      const element = select(svgElement).select(`#${hovered}`);

      if (!element) {
        return;
      }

      const name = element.attr("data-name");
      const type = element.attr("data-type");

      const highlightedLinks =
        type === "source"
          ? linksElement.selectAll(`[data-source="${hovered}"]`)
          : linksElement.selectAll(`[data-target="${hovered}"]`);
      highlightedLinks.attr("class", "transition-all stroke-blue-500");
      highlightedLinks.raise();

      // Create new element for the hovered node name
      const svgNode = element.node() as SVGGraphicsElement;

      let { x, y } = svgNode.getBBox();
      x += 30;
      y += 30;

      const nodeNameGroup = select(svgElement)
        .select("#chart")
        .append("g")
        .classed("node-name", true)
        .attr("transform", `translate(${x}, ${y})`);

      nodeNameGroup
        .append("foreignObject")
        .classed("node-name", true)
        .attr("x", () => {
          let offset = 0;

          // Exceptions to avoid overlapping
          const exceptions = [
            { source: "livestock-production", dx: 15 },
            { source: "renewable-energy-production", dx: -40 },
          ];

          const exception = exceptions.find(({ source }) => source === hovered);

          if (exception) {
            offset += exception.dx;
          }

          return (-1 * name.length * 12) / 2 + offset;
        })
        .attr("y", type === "source" ? 40 : -90)
        .attr("width", name.length * 12)
        .attr("height", 50)
        .append("xhtml:div")
        .classed(
          `flex justify-center h-full ${type === "target" ? "items-end" : "items-start"}`,
          true,
        )
        .append("xhtml:div")
        .classed(
          "bg-black rounded-full text-white border border-2 border-white text-xs h-fit px-3 py-1",
          true,
        )
        .html(name);

      // Create new elements for the linked nodes
      const linkedNodes: string[] =
        type === "source" ? relationships[hovered] : invert(relationships)[hovered];

      if (!linkedNodes) {
        return;
      }

      linkedNodes.forEach((nodeId) => {
        const linkedElement = select(svgElement).select(`#${nodeId}`);
        const linkedName = linkedElement.attr("data-name");
        const svgNode = linkedElement.node() as SVGGraphicsElement | null;

        if (!svgNode) {
          return;
        }

        let { x, y } = svgNode.getBBox();
        x += 30;
        y += 30;

        const width = linkedName.length * 12;

        const linkedNodeNameGroup = select(svgElement)
          .select("#chart")
          .append("g")
          .classed("node-name", true)
          .attr("transform", `translate(${x}, ${y})`);

        linkedNodeNameGroup
          .append("foreignObject")
          .classed("node-name", true)
          .attr("x", () => {
            let offset = 0;

            // Exceptions to avoid overlapping
            const exceptions = [
              { source: "water", target: "livestock-production", dx: 15 },
              { source: "water", target: "renewable-energy-production", dx: -40 },
              { source: "atmosphere", target: "renewable-energy-production", dx: -40 },
              { source: "grasslands", target: "livestock-production", dx: 15 },
              { source: "forests", target: "livestock-production", dx: 15 },
              { source: "soil", target: "mineral-extraction", dx: -17 },
              { source: "soil", target: "fossil-fuels", dx: 17 },
              { source: "wetlands", target: "tourism", dx: -8 },
              { source: "wetlands", target: "recreation-sites", dx: 10 },
              { source: "wetlands", target: "water-filtration", dx: -20 },
              { source: "wetlands", target: "habitat-provision", dx: 20 },
              { source: "forests", target: "tourism", dx: -8 },
              { source: "forests", target: "recreation-sites", dx: 10 },
              { source: "forests", target: "climate-regulation", dx: -31 },
              { source: "forests", target: "water-filtration", dx: -15 },
              { source: "forests", target: "habitat-provision", dx: 25 },
              { source: "tourism", target: "mangroves", dx: -6 },
              { source: "tourism", target: "wetlands", dx: 2 },
              { source: "tourism", target: "atmosphere", dx: -18 },
              { source: "tourism", target: "plants-and-animals", dx: 19 },
              { source: "climate-regulation", target: "atmosphere", dx: -19 },
              { source: "climate-regulation", target: "plants-and-animals", dx: 18 },
              { source: "habitat-provision", target: "grasslands", dx: -20 },
              { source: "habitat-provision", target: "mangroves", dx: -6 },
              { source: "habitat-provision", target: "wetlands", dx: 4 },
              { source: "habitat-provision", target: "forests", dx: 12 },
              { source: "plants-and-animals", target: "livestock-production", dx: 15 },
              { source: "plants-and-animals", target: "tourism", dx: -10 },
              { source: "plants-and-animals", target: "recreation-sites", dx: 10 },
            ];

            const exception = exceptions.find(
              ({ source, target }) => source === hovered && nodeId === target,
            );

            if (exception) {
              offset += exception.dx;
            }

            return (-1 * width) / 2 + offset;
          })
          .attr("y", () => {
            let offset = 0;

            // Exceptions to avoid overlapping
            const exceptions = [{ source: "water", target: "timber", dy: -45 }];

            const exception = exceptions.find(
              ({ source, target }) => source === hovered && nodeId === target,
            );

            if (exception) {
              offset += exception.dy;
            }

            return (type === "target" ? 40 : -90) + offset;
          })
          .attr("width", width)
          .attr("height", 52)
          .append("xhtml:div")
          .classed(
            `flex h-full justify-center ${type === "target" ? "items-start" : "items-end"}`,
            true,
          )
          .append("xhtml:div")
          .classed(
            "bg-blue-500 border border-2 border-blue-500 rounded-full text-white text-xs w-fit h-fit px-[10px] py-1",
            true,
          )
          .html(linkedName);
      });
    }
  }, [svgElement, hovered]);

  return [hovered, setHovered] as const;
};

// Create links for the relationships between source and target nodes
export const useInitLinks = (svgElement: SVGSVGElement | null) => {
  useEffect(() => {
    if (!svgElement) {
      return;
    }

    const nodePositions: NodePosition[] = select(svgElement)
      .selectAll(".node")
      .nodes()
      .map((node) => {
        const typedNode = node as Node;
        const bbox = typedNode.getBBox();
        const type = typedNode.getAttribute("data-type");
        return {
          id: typedNode.id,
          type,
          position: [bbox.x + bbox.width / 2, bbox.y + (type === "source" ? bbox.height + 4 : -4)],
        };
      });

    const links: Link[] = Object.entries(relationships)
      .map(([source, targets]) => {
        if (source && targets) {
          const sourcePosition = nodePositions.find((node) => node.id === source);
          if (!sourcePosition) {
            return;
          }

          return targets.map((target) => {
            const targetPosition = nodePositions.find((node) => node.id === target);
            if (!targetPosition) {
              return;
            }

            return {
              source: sourcePosition?.position,
              target: targetPosition?.position,
              sourceName: source,
              targetName: target,
            };
          });
        }
      })
      .flat()
      .filter((link): link is Link => link !== undefined && !!link.source && !!link.target);

    // Create link paths in d3
    const link = linkVertical()
      .source(function (d: DefaultLinkObject) {
        return [d.source[0], d.source[1]];
      })
      .target(function (d: DefaultLinkObject) {
        return [d.target[0], d.target[1]];
      });

    select(svgElement)
      .select("#links")
      .selectAll("path")
      .data(links)
      .enter()
      .append("path")
      .attr("d", (d: Link) => link(d))
      .attr("data-source", (d: Link) => d.sourceName)
      .attr("data-target", (d: Link) => d.targetName)
      .attr("stroke", GREY)
      .attr("stroke-width", 2)
      .attr("stroke-linecap", "round");
  }, [svgElement]);
};
