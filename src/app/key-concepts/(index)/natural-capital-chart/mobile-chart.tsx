"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useMemo, useState } from "react";
import {
  SourceGroup,
  SourceNode,
  TargetGroup,
  TargetNode,
  sourceNodes,
  targetNodes,
  targetSubGroups,
  relationships,
} from "./data";
import Image from "next/image";
import { linkVertical } from "d3-shape";

export interface MobileChartProps {
  width: number;
}

const CHART_HEIGHT = 240;
const IMAGE_SIZE = 60;

const MobileChart: FC<MobileChartProps> = ({ width }) => {
  const [sourceTab, setSourceTab] = useState<SourceGroup>(SourceGroup.Environmental);
  const [targetTab, setTargetTab] = useState<TargetGroup>(TargetGroup.Ecosystem);

  const filteredSourceNodes = useMemo(
    () => sourceNodes.filter((node) => node.group === sourceTab),
    [sourceTab],
  );

  const filteredTargetNodes = useMemo(
    () =>
      targetNodes
        .filter((node) => node.group === targetTab)
        .reduce((res, node) => {
          const present = res.findIndex(({ subGroup }) => subGroup === node.subGroup) !== -1;

          if (!node.subGroup || !present) {
            return [...res, node];
          }

          return res;
        }, [] as TargetNode[]),
    [targetTab],
  );

  const links = useMemo(
    () =>
      Object.entries(relationships).reduce(
        (res, [sourceId, targetIds]) => {
          const source = filteredSourceNodes.find(({ id }) => id === sourceId);
          const targets = filteredTargetNodes.filter(({ id, subGroup }) => {
            if (!subGroup) {
              return targetIds.includes(id);
            }

            const subGroupIds = targetIds
              .map(
                (targetSubGroupId) =>
                  targetNodes.find(({ id }) => targetSubGroupId === id)?.subGroup,
              )
              .filter((id) => !!id);

            return subGroupIds.includes(subGroup);
          });

          if (!source) {
            return res;
          }

          return [...res, ...targets.map((target) => ({ source, target }))];
        },
        [] as { source: SourceNode; target: TargetNode }[],
      ),
    [filteredSourceNodes, filteredTargetNodes],
  );

  const linker = useMemo(
    () =>
      linkVertical<(typeof links)[0], [number, number]>()
        .source((node) => {
          const index = filteredSourceNodes.findIndex(({ id }) => id === node.source.id);
          return [
            IMAGE_SIZE / 2 +
              index *
                (IMAGE_SIZE +
                  (width - filteredSourceNodes.length * IMAGE_SIZE) /
                    (filteredSourceNodes.length - 1)),
            4,
          ];
        })
        .target((node) => {
          const index = filteredTargetNodes.findIndex(({ id }) => id === node.target.id);
          return [
            IMAGE_SIZE / 2 +
              index *
                (IMAGE_SIZE +
                  (width - filteredTargetNodes.length * IMAGE_SIZE) /
                    (filteredTargetNodes.length - 1)),
            CHART_HEIGHT - 4,
          ];
        }),
    [filteredSourceNodes, filteredTargetNodes, width],
  );

  return (
    <>
      <Tabs value={sourceTab} onValueChange={(value) => setSourceTab(value as SourceGroup)}>
        <TabsList variant="default" className="mb-6">
          {Object.entries(SourceGroup).map(([name, key]) => (
            <TabsTrigger key={key} value={key} variant="default">
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(SourceGroup).map(([, key]) => (
          <TabsContent key={key} value={key} variant="default" className="flex justify-between">
            {sourceNodes
              .filter((node) => node.group === key)
              .map((node) => (
                <Image
                  key={node.id}
                  src={node.image}
                  alt={node.id}
                  width={IMAGE_SIZE}
                  height={IMAGE_SIZE}
                />
              ))}
          </TabsContent>
        ))}
      </Tabs>
      <div>
        <svg width={width} height={CHART_HEIGHT}>
          {links.map((link) => (
            <path
              key={`${link.source.id}-${link.target.id}`}
              d={linker(link) ?? ""}
              className="fill-none stroke-black/15 stroke-2"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>
      <Tabs value={targetTab} onValueChange={(value) => setTargetTab(value as TargetGroup)}>
        {Object.entries(TargetGroup).map(([, key]) => (
          <TabsContent key={key} value={key} variant="default" className="flex justify-between">
            {targetNodes
              .filter((node) => node.group === key)
              .reduce((res, node) => {
                const present = res.findIndex(({ subGroup }) => subGroup === node.subGroup) !== -1;

                if (!node.subGroup || !present) {
                  return [...res, node];
                }

                return res;
              }, [] as TargetNode[])
              .map((node) => {
                let name;
                let { id, image } = node;

                if (node.subGroup) {
                  const subGroup = targetSubGroups.find(
                    (subGroup) => subGroup.id === node.subGroup,
                  );
                  name = subGroup?.name;
                  id = subGroup?.id ?? id;
                  image = subGroup?.image ?? image;
                }

                return (
                  <div
                    key={node.id}
                    className="flex flex-col items-center gap-y-3"
                    style={{ width: IMAGE_SIZE }}
                  >
                    <Image src={image} alt={id} width={IMAGE_SIZE} height={IMAGE_SIZE} />
                    {!!name && <span className="text-xs">{name}</span>}
                  </div>
                );
              })}
          </TabsContent>
        ))}
        <TabsList variant="default" className="mt-6">
          {Object.entries(TargetGroup).map(([name, key]) => (
            <TabsTrigger key={key} value={key} variant="default">
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </>
  );
};

export default MobileChart;
