import { Group, Node, nodes } from "@/app/industry-use-cases/chart-data";
import { cn } from "@/lib/utils";
import { linkHorizontal } from "d3-shape";
import { FC, useCallback, useMemo, useState } from "react";

export interface DesktopChartProps {
  width: number;
  data: [number, number][];
}

const CHART_HEIGHT = 470;
const STROKE_WIDTH = 20;
const NODE_HEIGHT = 30;

const DesktopChart: FC<DesktopChartProps> = ({ width, data }) => {
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  const nodesByGroup = useMemo(() => {
    const uniqueNodeIds = new Set(data.flat());
    const uniqueNodes = Array.from(uniqueNodeIds)
      .map((id) => nodes.find((node) => node.id === id))
      .filter((node) => !!node) as Node[];

    return uniqueNodes.reduce(
      (res, node) => ({ ...res, [node.group]: [...(res[node.group] ?? []), node] }),
      Object.values(Group).reduce((res, key) => ({ ...res, [key]: [] }), {}) as Record<
        Group,
        Node[]
      >,
    );
  }, [data]);

  const getNodePosition = useCallback(
    (nodeId: number): [number, number] => {
      const node = nodes.find(({ id }) => id === nodeId);

      if (!node) {
        return [0, 0];
      }

      const columnIndex = Object.values(Group).indexOf(node.group);
      const rowIndex = nodesByGroup[node.group].findIndex(({ id }) => id === node.id);

      const x =
        ((columnIndex * width) / (Object.values(Group).length - 1) / width) *
          (width - STROKE_WIDTH) +
        STROKE_WIDTH / 2;

      const y =
        NODE_HEIGHT / 2 +
        rowIndex *
          (NODE_HEIGHT +
            (CHART_HEIGHT - nodesByGroup[node.group].length * NODE_HEIGHT) /
              (nodesByGroup[node.group].length - 1));

      return [x, y];
    },
    [nodesByGroup, width],
  );

  const linker = useMemo(
    () =>
      linkHorizontal<(typeof data)[0], [number, number]>()
        .source(([nodeId]) => getNodePosition(nodeId))
        .target(([, nodeId]) => getNodePosition(nodeId)),
    [getNodePosition],
  );

  const highlightedNodes = useMemo(() => {
    /**
     * Get all the nodes linked so a specific node
     * @param node Node to search with
     * @param ignoredGroups If specificied, ignore the nodes belonging to these groups
     * @param visitedNodes List of nodes already visited and ignored to avoid duplicates
     */
    const getLinkedNodes = (
      node: Node,
      ignoredGroups: Group[] = [],
      visitedNodes = new Set<Node["id"]>(),
    ): Node[] => {
      if (visitedNodes.has(node.id)) {
        return [];
      }

      visitedNodes.add(node.id);

      return data.reduce(
        (res, link) => {
          if (link.includes(node.id)) {
            const linkedNodeId = link[0] === node.id ? link[1] : link[0];
            const linkedNode = nodes.find(({ id }) => id === linkedNodeId);
            const isValidNode =
              linkedNode !== undefined && !ignoredGroups.includes(linkedNode.group);

            return [
              ...res,
              ...(isValidNode
                ? getLinkedNodes(linkedNode, [...ignoredGroups, node.group], visitedNodes)
                : []),
            ];
          }

          return res;
        },
        [node] as Node[],
      );
    };

    if (hoveredNode) {
      return getLinkedNodes(hoveredNode);
    }

    return [];
  }, [data, hoveredNode]);

  return (
    <>
      <div className="grid grid-cols-3">
        {Object.entries(Group).map(([name, key], index, array) => (
          <div
            key={key}
            className={cn("flex flex-col px-5", {
              "items-start": index === 0,
              "items-center": index > 0 && index + 1 < array.length,
              "items-end": index + 1 === array.length,
            })}
          >
            <div className="text-xl">{name}</div>
          </div>
        ))}
      </div>
      <div className="relative mt-5">
        <svg width={width} height={CHART_HEIGHT} className="absolute">
          {data
            .sort((link1, link2) => {
              const isLink1Highlighted =
                highlightedNodes.findIndex(({ id }) => id === link1[0]) !== -1 &&
                highlightedNodes.findIndex(({ id }) => id === link1[1]) !== -1;

              const isLink2Highlighted =
                highlightedNodes.findIndex(({ id }) => id === link2[0]) !== -1 &&
                highlightedNodes.findIndex(({ id }) => id === link2[1]) !== -1;

              if (isLink1Highlighted && !isLink2Highlighted) {
                return 1;
              }

              if (!isLink1Highlighted && isLink2Highlighted) {
                return -1;
              }

              return 0;
            })
            .map((link) => {
              const isHighlighted =
                highlightedNodes.findIndex(({ id }) => id === link[0]) !== -1 &&
                highlightedNodes.findIndex(({ id }) => id === link[1]) !== -1;

              return (
                <path
                  key={`${link[0]}-${link[1]}`}
                  d={linker(link) ?? ""}
                  className={cn("fill-none transition-all", {
                    "stroke-black opacity-[12%]": !isHighlighted,
                    "stroke-green-500 opacity-80": isHighlighted,
                  })}
                  strokeLinecap="round"
                  strokeWidth={STROKE_WIDTH}
                />
              );
            })}
        </svg>
        <div className="relative z-10 grid grid-cols-3">
          {Object.entries(Group).map(([, key], index, array) => (
            <div
              key={key}
              className={cn("flex flex-col justify-between", {
                "items-start": index === 0,
                "items-center text-center": index > 0 && index + 1 < array.length,
                "items-end text-right": index + 1 === array.length,
              })}
              style={{ height: CHART_HEIGHT }}
            >
              {nodesByGroup[key].map((node) => {
                const isHighlighted = highlightedNodes.findIndex(({ id }) => id === node.id) !== -1;
                return (
                  <div
                    key={node.id}
                    title={node.name}
                    className={cn(
                      "max-w-60 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-full border-2 px-2.5 py-0.5 transition-colors xl:max-w-72",
                      {
                        "border-black bg-black text-white": isHighlighted,
                        "border-white bg-grey-75": !isHighlighted,
                      },
                    )}
                    onMouseEnter={() => setHoveredNode(node)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {node.name}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DesktopChart;
