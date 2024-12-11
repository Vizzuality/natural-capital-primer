"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/svgs/logo.svg";
import Menu from "@/icons/menu.svg";
import Close from "@/icons/close.svg";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { FC, MouseEvent, useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import HoverRepeatAnimation from "./animations/hover-repeat";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChevronBold from "@/icons/chevron-bold.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const DIALOG_ANIMATION_DURATION = 0.3;
const HEADER_ANIMATION_DURATION = 0.3;
const HEADER_EASING_FUNCTION = "easeOut";
const HEADER_VARIANTS = {
  visible: { y: 0 },
  hidden: { y: "-53px" },
};

const Header: FC = () => {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const previousScrollYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value < previousScrollYRef.current) {
      setVisible(true);
    } else if (value > 52 && value > previousScrollYRef.current) {
      setVisible(false);
    }

    previousScrollYRef.current = value;
  });

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
    <motion.header
      className="sticky top-0 z-50 border-b border-b-black bg-white"
      variants={HEADER_VARIANTS}
      animate={visible ? "visible" : "hidden"}
      transition={{
        ease: HEADER_EASING_FUNCTION,
        duration: HEADER_ANIMATION_DURATION,
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 lg:px-20"
        aria-label="Global"
      >
        <Button variant="link" size="auto" asChild>
          <Link href="/" className="-m-1.5 p-1.5">
            <Logo className="h-8" aria-hidden="true" />
            <span className="sr-only">Natural Capital Primer</span>
          </Link>
        </Button>
        <div className="flex h-full items-end items-center gap-8">
          <NavigationMenu delayDuration={0} className="hidden xl:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  active={pathname.startsWith("/natural-capital-in-daily-life")}
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/natural-capital-in-daily-life">Natural Capital in Daily Life</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger active={pathname.startsWith("/key-concepts")}>
                  Key Concepts
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-3">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/key-concepts">Introduction</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/key-concepts#assets">Natural Capital Assets</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/key-concepts#flows-of-services">Flows of Services</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/key-concepts#dependencies-and-impacts">
                      Dependencies and Impacts
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger active={pathname.startsWith("/industry-use-cases")}>
                  Industry Use Cases
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-3">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/industry-use-cases">Introduction</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/industry-use-cases#manufacturing">Manufacturing</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/industry-use-cases#tourism">Tourism</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/industry-use-cases#retail">Retail</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/industry-use-cases#food-systems">Food Systems</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger active={pathname.startsWith("/climate-and-biodiversity")}>
                  Climate & Biodiversity
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-3">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/climate-and-biodiversity">Introduction</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/climate-and-biodiversity#climate">
                      Natural Capital & Climate Change
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/climate-and-biodiversity#biodiversity">
                      Natural Capital & Biodiversity
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                type="button"
                variant="default"
                size="sm"
                className="bg-black pl-2.5 pr-[18px] hover:bg-black"
              >
                <Menu
                  aria-hidden="true"
                  className="mr-2.5 h-5 w-5 rounded-full border border-white/20 text-white"
                />
                <span className="text-sm" aria-hidden>
                  <HoverRepeatAnimation>Menu</HoverRepeatAnimation>
                </span>
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
                                          <span className="not-sr-only">Ch</span> 1 - Natural
                                          Capital Assets
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
                                          <span className="not-sr-only">Ch</span> 3 - Dependencies
                                          and Impacts
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
                                        href="/industry-use-cases#food-systems"
                                        onClick={onClickSubSection}
                                      >
                                        <HoverRepeatAnimation>Food Systems</HoverRepeatAnimation>
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
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
