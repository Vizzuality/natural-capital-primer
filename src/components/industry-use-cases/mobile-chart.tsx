import { Group, Node, nodes } from "@/app/industry-use-cases/chart-data";
import { FC, useCallback, useMemo } from "react";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Chrevon from "@/icons/chevron.svg";

export interface MobileChartProps {
  data: [number, number][];
}

const MobileChart: FC<MobileChartProps> = ({ data }) => {
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

  /**
   * Get all the nodes linked so a specific node
   * @param node Node to search with
   * @param ignoredGroups If specificied, ignore the nodes belonging to these groups
   * @param visitedNodes List of nodes already visited and ignored to avoid duplicates
   */
  const getLinkedNodes = useCallback(
    (node: Node, ignoredGroups: Group[] = [], visitedNodes = new Set<Node["id"]>()): Node[] => {
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
    },
    [data],
  );

  return (
    <Accordion type="single" collapsible defaultValue={Object.values(Group)[0]}>
      <div className="flex flex-col gap-y-6">
        {Object.entries(Group).map(([name, key]) => (
          <AccordionItem
            key={key}
            value={key}
            className="flex flex-shrink-0 flex-col data-[state=open]:flex-shrink"
          >
            <AccordionTrigger variant="box" className="shrink-0">
              {name}
            </AccordionTrigger>
            <AccordionContent variant="box">
              <Accordion type="single" collapsible>
                {nodesByGroup[key].map((node, index) => (
                  <AccordionItem key={node.id} value={node.name}>
                    <AccordionTrigger
                      className={cn({
                        "w-full py-6 font-normal data-[state=open]:font-bold": true,
                        "border-t-0": index === 0,
                      })}
                    >
                      {node.name}
                      <Chrevon />
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-y-6 pb-6">
                        {Object.entries(Group)
                          .filter(([, headingKey]) => headingKey !== key)
                          .map(([headingName, headingKey], headingIndex) => (
                            <div
                              key={headingKey}
                              className={cn({
                                "border-t border-dashed border-t-black pt-6": headingIndex > 0,
                              })}
                            >
                              <div className="text-xs font-bold uppercase">{headingName}</div>
                              <ul className="mt-2 flex flex-col gap-y-2">
                                {getLinkedNodes(node)
                                  .filter(({ group }) => group === headingKey)
                                  .map((linkedNode) => (
                                    <li key={linkedNode.id}>{linkedNode.name}</li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
    </Accordion>
  );
};

export default MobileChart;
