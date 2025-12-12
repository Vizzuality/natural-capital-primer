"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import HoverRepeatAnimation from "../animations/hover-repeat";

const LearnMoreButton = () => {
  return (
    <Button
      variant="default"
      size="lg"
      className="hover:bg-black focus-visible:ring-offset-orange-500"
      asChild
    >
      <Link href="/climate-and-biodiversity">
        <HoverRepeatAnimation>Climate & Biodiversity</HoverRepeatAnimation>
      </Link>
    </Button>
  );
};

export default LearnMoreButton;
