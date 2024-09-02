import { useEffect, useState } from "react";
import { select, selectAll } from "d3-selection";
import { relationships } from "./data";
import type { SourceNodes } from "./data";
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

export const GREY = "#515679";

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
      select(svgElement).select("#links").selectAll("path").attr("stroke", GREY);

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
      highlightedLinks.attr("stroke", "white");
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
        .attr("x", (-1 * name.length * 12) / 2)
        .attr("y", type === "source" ? 40 : -90)
        .attr("width", name.length * 12)
        .attr("height", 50)
        .append("xhtml:div")
        .classed(
          `flex justify-center h-full ${type === "target" ? "items-end" : "items-start"}`,
          true,
        )
        .append("xhtml:div")
        .classed("bg-white rounded-full text-black text-xs h-fit px-3 py-1", true)
        .html(name);

      // Create new elements for the linked nodes
      const linkedNodes: string[] =
        type === "source"
          ? relationships[hovered as SourceNodes]
          : invert(relationships)[hovered as SourceNodes];

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
              { source: "soil", target: "mineral-extraction", dx: -17 },
              { source: "soil", target: "fossil-fuels", dx: 17 },
              { source: "wetlands", target: "tourism", dx: -10 },
              { source: "wetlands", target: "recreation-sites", dx: 10 },
              { source: "tourism", target: "mangroves", dx: -5 },
              { source: "tourism", target: "wetlands", dx: 5 },
              { source: "climate-regulation", target: "atmosphere", dx: -18 },
              { source: "climate-regulation", target: "plants-and-animals", dx: 18 },
              { source: "habitat-provision", target: "atmosphere", dx: -18 },
              { source: "habitat-provision", target: "plants-and-animals", dx: 18 },
              { source: "habitat-provision", target: "grassland", dx: -13 },
              { source: "habitat-provision", target: "mangroves", dx: 13 },
            ];

            const exception = exceptions.find(
              ({ source, target }) => source === hovered && nodeId === target,
            );

            if (exception) {
              offset += exception.dx;
            }

            return (-1 * width) / 2 + offset;
          })
          .attr("y", type === "target" ? 40 : -90)
          .attr("width", width)
          .attr("height", 52)
          .append("xhtml:div")
          .classed(
            `flex h-full justify-center ${type === "target" ? "items-start" : "items-end"}`,
            true,
          )
          .append("xhtml:div")
          .classed(
            "bg-gray-450/40 backdrop-blur border border-2 border-white rounded-full text-white text-xs w-fit h-fit px-[10px] py-1",
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
