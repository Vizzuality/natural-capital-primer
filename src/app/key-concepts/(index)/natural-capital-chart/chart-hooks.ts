import { useEffect } from "react";
import { select, selectAll } from "d3-selection";
import { relationships } from "./data";
import type { SourceNodes } from "./data";
import { linkVertical, DefaultLinkObject } from "d3-shape";

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

export const useHovered = ({ hovered }: { hovered?: string }) => {
  useEffect(() => {
    if (hovered) {
      const element = select(`#${hovered}`);
      if (!element) return;

      // TODO: Fix this
      // Highlight the corespondant links
      const name = element.attr("data-name");
      const type = element.attr("data-type");
      const linksElement = select("#links");
      const higlightedLinks =
        type === "source"
          ? linksElement.selectAll(`[data-source="${hovered}"]`)
          : linksElement.selectAll(`[data-target="${hovered}"]`);
      higlightedLinks.attr("stroke", "white");
      higlightedLinks.raise();

      // Create new element for the hovered node name
      const svgNode = element.node() as SVGGraphicsElement | undefined;
      if (!svgNode) return;
      const bbox = svgNode?.getBBox();
      const x = bbox.x + 30;
      const y = bbox.y + 30;

      const nodeNameGroup = select("#chart")
        .append("g")
        .classed("node-name", true)
        .attr("transform", `translate(${x}, ${y})`);

      nodeNameGroup
        .append("foreignObject")
        .classed("node-name", true)
        .attr("x", -45)
        .attr("y", type === "source" ? 40 : -90)
        .attr("width", 90)
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

      if (!linkedNodes) return;
      linkedNodes.forEach((nodeId) => {
        const linkedElement = select(`#${nodeId}`);
        const linkedName = linkedElement.attr("data-name");
        const svgNode = linkedElement.node() as SVGGraphicsElement | undefined;
        if (!svgNode) return;
        const bbox = svgNode?.getBBox();
        const x = bbox.x + 30;
        const y = bbox.y + 30;

        const linkedNodeNameGroup = select("#chart")
          .append("g")
          .classed("node-name", true)
          .attr("transform", `translate(${x}, ${y})`);

        linkedNodeNameGroup
          .append("foreignObject")
          .classed("node-name", true)
          .attr("x", -45)
          .attr("y", type === "target" ? 40 : -90)
          .attr("width", 90)
          .attr("height", 50)
          .append("xhtml:div")
          .classed(
            `flex h-full justify-center ${type === "target" ? "items-start" : "items-end"}`,
            true,
          )
          .append("xhtml:div")
          .classed(
            "bg-gray-450/40 backdrop-blur border border-3 border-white rounded-full text-white text-xs w-fit h-fit px-[10px] py-1",
            true,
          )
          .html(linkedName);
      });
    }

    if (!hovered) {
      // Clear links
      const allLinks = select("#links").selectAll("path");
      allLinks.attr("stroke", GREY);
      // Clear node name
      selectAll(".node-name").remove();
    }
  }, [hovered]);
};

export const useInitLinks = () => {
  useEffect(() => {
    // Create links for the relationships between source and target nodes

    type Node = SVGGraphicsElement;
    type NodePosition = {
      id: string;
      type: string | null;
      position: number[];
    };
    const nodePositions: NodePosition[] = selectAll(".node")
      .nodes()
      .map((node) => {
        const typedNode = node as Node;
        const bbox = typedNode.getBBox();
        const type = typedNode.getAttribute("data-type");
        return {
          id: typedNode.id,
          type,
          position: [bbox.x + bbox.width / 2, bbox.y + bbox.height / 2],
        };
      });

    interface Link extends DefaultLinkObject {
      sourceName: string;
      targetName: string;
    }

    const links: Link[] = Object.entries(relationships)
      .map(([source, targets]) => {
        if (source && targets) {
          const sourcePosition = nodePositions.find((node) => node.id === source);
          if (!sourcePosition) return;
          return targets.map((target) => {
            const targetPosition = nodePositions.find((node) => node.id === target);
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
      .filter((e) => e?.source && e?.target)
      .filter((link): link is Link => link !== undefined);

    // Create link paths in d3
    const link = linkVertical()
      .source(function (d: DefaultLinkObject) {
        return [d.source[0], d.source[1]];
      })
      .target(function (d: DefaultLinkObject) {
        return [d.target[0], d.target[1]];
      });

    select("#links")
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

    // Raise the rest group above the links
    select("#rest").raise();
  }, []);
};
