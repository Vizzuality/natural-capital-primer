"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import MobileMenuIcon from "@/svgs/mobile-menu.svg";
import type { Link as LinkType } from "./data";
import { Button } from "@/components/ui/button";
import Close from "@/svgs/close.svg";
import { PopoverClose } from "@radix-ui/react-popover";

const MobileMenu = ({ id, links }: { id: string; links: LinkType[] }) => {
  const selectedLink = links.find((link) => link.id === id);
  const [popoverOpen, setPopoverOpen] = useState(false);
  if (!selectedLink) return null;

  return (
    <nav
      className={cn("z-50 mx-7 block py-10 lg:hidden", {
        "sticky top-0 mb-96": popoverOpen,
        relative: !popoverOpen,
      })}
    >
      <div className="flex min-h-11 items-center justify-between gap-2 rounded-[40px] border border-black bg-white/10 p-1 text-black backdrop-blur-[80px]">
        <div className="rounded-[50px] px-5">{selectedLink.text}</div>
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <Button className="pointer-events-auto flex h-[52px] w-[52px] flex-col items-center justify-center gap-[11px] rounded-full bg-black p-[11px]">
              <span className="sr-only">Open chapters menu</span>
              <MobileMenuIcon aria-hidden="true" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={-56}
            alignOffset={-4}
            align="end"
            className="sticky w-[calc(100vw-28px*2)] justify-between rounded-[28px] bg-black p-1 backdrop-blur-[200px]"
          >
            <PopoverClose>
              <Close className="absolute right-1 top-1 h-[52px] w-[52px] rounded-[220px] bg-white p-[11px]" />
            </PopoverClose>
            <nav className="flex w-full flex-col gap-3 pb-5 pl-10 pt-0">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={cn("py-3 text-white", {
                    "font-bold": link.id === id,
                  })}
                  onClick={
                    // Close the popover when a link is clicked
                    () => setPopoverOpen(false)
                  }
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default MobileMenu;
