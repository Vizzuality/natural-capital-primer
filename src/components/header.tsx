"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoMonochrome from "@/svgs/logo-monochrome.svg";
import Logo from "@/svgs/logo.svg";
import Menu from "@/icons/menu.svg";
import MenuMobile from "@/icons/menu-mobile.svg";
import Close from "@/icons/close.svg";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { FC, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HoverRepeatAnimation from "./animations/hover-repeat";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const logoVariants = cva("", {
  variants: {
    logo: {
      default: "",
      white: "text-white",
      black: "text-black",
    },
  },
  defaultVariants: {
    logo: "default",
  },
});

const Header: FC<VariantProps<typeof logoVariants>> = ({ logo }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const triggerContent = useMemo(() => {
    if (pathname.startsWith("/about")) {
      return "About";
    }

    if (pathname.startsWith("/key-concepts")) {
      return "Key Concepts";
    }

    if (pathname.startsWith("/industry-use-cases")) {
      return "Industry Use Cases";
    }

    if (pathname.startsWith("/resources")) {
      return "Resources";
    }

    if (pathname.startsWith("/privacy-policy")) {
      return "Privacy Policy";
    }

    if (pathname.startsWith("/terms-and-conditions")) {
      return "Terms and Conditions";
    }

    return "Menu";
  }, [pathname]);

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-20"
        aria-label="Global"
      >
        <Button variant="link" size="auto" className={cn(logoVariants({ logo }))} asChild>
          <Link href="/" className="-m-1.5 p-1.5">
            {(!logo || logo === "default") && <Logo className="h-8" aria-hidden="true" />}
            {logo && logo !== "default" && <LogoMonochrome className="h-8" aria-hidden="true" />}
            <span className="sr-only">Natural Capital Primer</span>
          </Link>
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button type="button" className="h-11 px-3 hover:bg-black lg:h-auto lg:pl-2.5">
              <Menu
                aria-hidden="true"
                className="mr-2.5 hidden h-5 w-5 rounded-full border border-white/20 text-white lg:block"
              />
              <MenuMobile aria-hidden="true" className="h-5 w-5 text-white lg:hidden" />
              <span className="hidden lg:inline-block" aria-hidden>
                <HoverRepeatAnimation>{triggerContent}</HoverRepeatAnimation>
              </span>
              <span className="sr-only">Menu</span>
            </Button>
          </DialogTrigger>
          <AnimatePresence initial={false}>
            {open && (
              <DialogContent
                forceMount
                asChild
                variant="fullscreen"
                scheme="blue"
                className="flex flex-col p-5 xl:p-10"
              >
                <motion.div
                  initial={{ x: "-50%", y: "-150%" }}
                  animate={{ x: "-50%", y: "-50%" }}
                  exit={{ x: "-50%", y: "-150%" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-end">
                    <DialogTitle className="sr-only">Main navigation</DialogTitle>
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="white"
                        size="auto"
                        className="h-11 w-11 ring-offset-blue-500 xl:w-auto xl:p-2.5 xl:pr-4"
                      >
                        <Menu
                          aria-hidden="true"
                          className="mr-2.5 hidden h-5 w-5 rounded-full border border-black/20 xl:block"
                        />
                        <Close aria-hidden="true" className="h-4 w-4 xl:hidden" />
                        <span className="sr-only xl:not-sr-only">
                          <HoverRepeatAnimation>Close</HoverRepeatAnimation>
                        </span>
                      </Button>
                    </DialogClose>
                  </div>
                  <ul className="flex flex-grow flex-col items-start justify-center gap-y-6 text-3xl font-medium xl:justify-end xl:text-5xl">
                    <li>
                      <Link href="/">
                        <HoverRepeatAnimation>Home</HoverRepeatAnimation>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <HoverRepeatAnimation>About</HoverRepeatAnimation>
                      </Link>
                    </li>
                    <li>
                      <ul className="flex flex-col gap-y-6 border-y border-y-black/20 pb-6 pt-5 xl:flex-row xl:gap-x-20 xl:gap-y-10 xl:pt-6">
                        <li className="text-base font-normal xl:text-2xl">The Primer</li>
                        <li>
                          <ul className="flex flex-col items-start gap-y-10">
                            <li className="flex flex-col gap-y-6 xl:gap-y-8">
                              <Link href="/key-concepts">
                                <HoverRepeatAnimation>Key Concepts</HoverRepeatAnimation>
                              </Link>
                              <ul className="flex flex-wrap gap-3 text-base font-normal">
                                <li>
                                  <Link
                                    href="/key-concepts/assets"
                                    className="block rounded-full border border-black px-6 py-2.5 transition-colors duration-300 hover:bg-black hover:text-white xl:px-8 xl:py-4"
                                  >
                                    Assets
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/key-concepts/flows-of-services"
                                    className="block rounded-full border border-black px-6 py-2.5 transition-colors duration-300 hover:bg-black hover:text-white xl:px-8 xl:py-4"
                                  >
                                    Flows of Services
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/key-concepts/dependencies-and-impacts"
                                    className="block rounded-full border border-black px-6 py-2.5 transition-colors duration-300 hover:bg-black hover:text-white xl:px-8 xl:py-4"
                                  >
                                    Dependencies and Impacts
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link href="/industry-use-cases">
                                <HoverRepeatAnimation>Industry Use Cases</HoverRepeatAnimation>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex flex-wrap gap-x-6 gap-y-4 text-base font-normal xl:gap-x-10">
                        <li>
                          <Link href="/resources" className="underline">
                            Resources
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy" className="underline">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link href="/terms-and-conditions" className="underline">
                            Terms and Conditions
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </motion.div>
              </DialogContent>
            )}
          </AnimatePresence>
        </Dialog>
      </nav>
    </header>
  );
};

export default Header;
