"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Link = {
  text: string;
  href: string;
  ref: React.RefObject<HTMLDivElement>;
  id: string;
};

const Menu = ({ links, activeId }: { links: Link[]; activeId: string | null }) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash.substring(1));
    };

    // Set the active link on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    setActiveLink(activeId || "");
  }, [activeId]);

  const isActive = (href: string) => activeLink === href.substring(1);

  const link = ({
    text,
    href,
    ref,
  }: {
    text: string;
    href: string;
    ref: React.RefObject<HTMLAnchorElement>;
  }) => (
    <Link
      key={href}
      href={href}
      scroll={false}
      onClick={() => {
        if (ref?.current) {
          ref?.current.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={cn("flex h-full grow items-center justify-center gap-2 rounded-[50px] px-5", {
        "bg-black text-white": isActive(href),
      })}
    >
      <div>{text}</div>
    </Link>
  );

  return (
    <nav className="sticky -top-8 z-20 mx-auto flex h-0 max-w-[1140px] translate-y-[60px] flex-col gap-2.5">
      <div className="flex h-11 items-center gap-2 rounded-[40px] border border-black bg-white/10 p-1 text-black backdrop-blur-[80px]">
        {links.map(link)}
      </div>
    </nav>
  );
};

export default Menu;
