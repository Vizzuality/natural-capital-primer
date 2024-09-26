"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoMonochrome from "@/svgs/logo-monochrome.svg";
import Logo from "@/svgs/logo.svg";
import Menu from "@/icons/menu.svg";
import MenuMobile from "@/icons/menu-mobile.svg";
import Close from "@/icons/close.svg";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { FC, MouseEvent, useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HoverRepeatAnimation from "./animations/hover-repeat";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChevronBold from "@/icons/chevron-bold.svg";

const DIALOG_ANIMATION_DURATION = 0.3;

const logoVariants = cva("", {
  variants: {
    logo: {
      default: "",
      color: "text-black",
      white: "text-white",
      black: "text-black",
    },
  },
  defaultVariants: {
    logo: "default",
  },
});

const Header: FC<{
  logo?: VariantProps<typeof logoVariants>["logo"];
  menuVariant?: "white";
  headerClassName?: string;
  anchors?: React.ReactElement;
}> = ({ logo, menuVariant, anchors, headerClassName }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const triggerContent = useMemo(() => {
    if (pathname.startsWith("/about")) {
      return "About";
    }

    if (pathname.startsWith("/natural-capital-in-daily-life")) {
      return "Natural Capital in Daily Life";
    }

    if (pathname.startsWith("/key-concepts")) {
      return "Key Concepts";
    }

    if (pathname.startsWith("/industry-use-cases")) {
      return "Industry Use Cases";
    }

    if (pathname.startsWith("/climate-and-biodiversity")) {
      return "Climate & Biodiversity";
    }

    if (pathname.startsWith("/resources")) {
      return "Resources";
    }

    if (pathname.startsWith("/references")) {
      return "References";
    }

    if (pathname.startsWith("/terms-and-conditions")) {
      return "Terms & Conditions";
    }

    return "Menu";
  }, [pathname]);

  const onClickSubSection = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      const { href } = e.currentTarget as HTMLAnchorElement;
      const url = new URL(href);
      const targetPathname = url.pathname;

      // This is a hacky solution for when the user is already on the page and clicks a link to a
      // specific section on that page. By default, it seems that the dialog, somehow, scrolls back
      // to the top when closed. In Radix UI's documentation, there seems to be a solution involving
      // the `modal` prop but it would stop hiding what's outside the dialog from the accessibility
      // tree. Instead, this is what we're doing:
      // 1. Stop Next.js from navigating
      // 2. Close the modal
      // 3. Wait for the animation to be done and the component to be unmounted (50ms buffer)
      // 4. Navigate to that section
      if (pathname === targetPathname) {
        e.preventDefault();
        setOpen(false);
        setTimeout(
          () => {
            router.push(href);
          },
          DIALOG_ANIMATION_DURATION * 1000 + 50,
        );
      }
    },
    [pathname, router],
  );

  return (
    <header className={headerClassName}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-20"
        aria-label="Global"
      >
        <Button variant="link" size="auto" className={cn(logoVariants({ logo }))} asChild>
          <Link href="/" className="-m-1.5 p-1.5">
            {(!logo || ["default", "color"].includes(logo)) && (
              <Logo className={cn(logoVariants({ logo }), "h-8")} aria-hidden="true" />
            )}
            {logo && !["default", "color"].includes(logo) && (
              <LogoMonochrome className="h-8" aria-hidden="true" />
            )}
            <span className="sr-only">Natural Capital Primer</span>
          </Link>
        </Button>
        {anchors}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant={menuVariant}
              className={cn("h-11 px-6 lg:h-auto lg:pl-2.5", {
                "bg-black hover:bg-black": !menuVariant,
              })}
            >
              <Menu
                aria-hidden="true"
                className={cn("mr-2.5 hidden h-5 w-5 rounded-full border lg:block", {
                  "border-white/20 text-white": !menuVariant,
                  "border-black/20": menuVariant === "white",
                })}
              />
              <MenuMobile
                aria-hidden="true"
                className={cn("h-5 w-5 lg:hidden", {
                  "text-white": !menuVariant,
                  "text-black": menuVariant === "white",
                })}
              />
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
                variant="sheet"
                scheme="blue"
                className="flex flex-col"
              >
                <motion.div
                  initial={{ x: "100%", y: "-50%" }}
                  animate={{ x: "0%", y: "-50%" }}
                  exit={{ x: "100%", y: "-50%" }}
                  transition={{ duration: DIALOG_ANIMATION_DURATION }}
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
                  <ul className="flex flex-col items-stretch justify-center gap-y-6 lg:text-2xl">
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
                      <Accordion type="single" collapsible>
                        <ul className="flex flex-col gap-y-6 border-t-2 border-t-blue-800 pb-6 pt-5 xl:gap-y-10">
                          <li className="text-base font-bold">The Primer</li>
                          <li className="xl:-mt-4">
                            <Link href="/natural-capital-in-daily-life">
                              <HoverRepeatAnimation>
                                Natural Capital in Daily Life
                              </HoverRepeatAnimation>
                            </Link>
                          </li>
                          <li>
                            <AccordionItem value="key-concepts">
                              <AccordionTrigger
                                variant="naked"
                                className="flex w-full items-center justify-between"
                              >
                                Key Concepts <ChevronBold className="h-6 w-6" />
                              </AccordionTrigger>
                              <AccordionContent variant="naked">
                                <ul className="flex flex-col gap-2 pt-7 text-base font-normal">
                                  <li>
                                    <Link href="/key-concepts">
                                      <HoverRepeatAnimation>Go to page</HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/key-concepts#assets" onClick={onClickSubSection}>
                                      <HoverRepeatAnimation>
                                        <span className="sr-only">Chapter</span>
                                        <span className="not-sr-only">Ch</span> 1 - Assets &
                                        Resources
                                      </HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/key-concepts#flows-of-services"
                                      onClick={onClickSubSection}
                                    >
                                      <HoverRepeatAnimation>
                                        <span className="sr-only">Chapter</span>
                                        <span className="not-sr-only">Ch</span> 2 - Flows of
                                        Services
                                      </HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/key-concepts#dependencies-and-impacts"
                                      onClick={onClickSubSection}
                                    >
                                      <HoverRepeatAnimation>
                                        <span className="sr-only">Chapter</span>
                                        <span className="not-sr-only">Ch</span> 3 - Dependencies and
                                        Impacts
                                      </HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </li>
                          <li>
                            <AccordionItem value="industry-use-cases">
                              <AccordionTrigger
                                variant="naked"
                                className="flex w-full items-center justify-between"
                              >
                                Industry Use Cases <ChevronBold className="h-6 w-6" />
                              </AccordionTrigger>
                              <AccordionContent variant="naked">
                                <ul className="flex flex-col gap-2 pt-7 text-base font-normal">
                                  <li>
                                    <Link href="/industry-use-cases">
                                      <HoverRepeatAnimation>Go to page</HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/industry-use-cases#manufacturing"
                                      onClick={onClickSubSection}
                                    >
                                      <HoverRepeatAnimation>Manufacturing</HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/industry-use-cases#tourism"
                                      onClick={onClickSubSection}
                                    >
                                      <HoverRepeatAnimation>Tourism</HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/industry-use-cases#retail"
                                      onClick={onClickSubSection}
                                    >
                                      <HoverRepeatAnimation>Retail</HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/industry-use-cases#food-system"
                                      onClick={onClickSubSection}
                                    >
                                      <HoverRepeatAnimation>Food Security</HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </li>
                          <li>
                            <AccordionItem value="climate-and-biodiversity">
                              <AccordionTrigger
                                variant="naked"
                                className="flex w-full items-center justify-between"
                              >
                                Climate & Biodiversity <ChevronBold className="h-6 w-6" />
                              </AccordionTrigger>
                              <AccordionContent variant="naked">
                                <ul className="flex flex-col gap-2 pt-7 text-base font-normal">
                                  <li>
                                    <Link href="/climate-and-biodiversity">
                                      <HoverRepeatAnimation>Go to page</HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/climate-and-biodiversity#climate"
                                      onClick={onClickSubSection}
                                    >
                                      <HoverRepeatAnimation>Climate</HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/climate-and-biodiversity#biodiversity"
                                      onClick={onClickSubSection}
                                    >
                                      <HoverRepeatAnimation>Biodiversity</HoverRepeatAnimation>
                                    </Link>
                                  </li>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </li>
                          <li>
                            <Link href="/resources">
                              <HoverRepeatAnimation>Resources</HoverRepeatAnimation>
                            </Link>
                          </li>
                          <li>
                            <Link href="/references">
                              <HoverRepeatAnimation>References</HoverRepeatAnimation>
                            </Link>
                          </li>
                        </ul>
                      </Accordion>
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
