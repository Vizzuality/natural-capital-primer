"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/svgs/logo.svg";
import Menu from "@/icons/menu.svg";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import {
  FC,
  Fragment,
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
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
import Close from "@/svgs/close.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import useMediaQuery from "@/hooks/use-media-query";

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

  const isDesktopXl = useMediaQuery("(min-width: 1280px)", false);

  const MobileOnlyAccordion = useMemo(() => {
    if (isDesktopXl) {
      const Comp = ({ children }: PropsWithChildren) => <Fragment>{children}</Fragment>;
      return Comp;
    }

    return Accordion;
  }, [isDesktopXl]);

  const MobileOnlyAccordionItem = useMemo(() => {
    if (isDesktopXl) {
      const Comp = ({ children }: PropsWithChildren) => <Fragment>{children}</Fragment>;
      return Comp;
    }

    return AccordionItem;
  }, [isDesktopXl]);

  const MobileOnlyAccordionTrigger = useMemo(() => {
    if (isDesktopXl) {
      const Comp = ({
        children,
        className,
        href,
      }: PropsWithChildren<{ className: string; href: string }>) => (
        <div className={className}>
          <Link href={href} className="w-full">
            <HoverRepeatAnimation>{children}</HoverRepeatAnimation>
          </Link>
        </div>
      );
      return Comp;
    }

    return AccordionTrigger;
  }, [isDesktopXl]);

  const MobileOnlyAccordionContent = useMemo(() => {
    if (isDesktopXl) {
      const Comp = ({ children }: PropsWithChildren) => <Fragment>{children}</Fragment>;
      return Comp;
    }

    return AccordionContent;
  }, [isDesktopXl]);

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
        <div className="flex h-full items-center gap-8">
          <NavigationMenu delayDuration={0} className="hidden xl:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  active={pathname.startsWith("/natural-capital-in-daily-life")}
                >
                  Natural Capital in Daily Life
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-3">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/natural-capital-in-daily-life">Introduction</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/natural-capital-in-daily-life#mobile-phone">Mobile Phone</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/natural-capital-in-daily-life#shower">Shower</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/natural-capital-in-daily-life#clothes">Clothes</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/natural-capital-in-daily-life#kettle-and-coffee">
                      Kettle & Coffee
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/natural-capital-in-daily-life#bread-and-butter">
                      Bread & Butter
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/natural-capital-in-daily-life#train">Train</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/natural-capital-in-daily-life#laptop">Laptop</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
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
                <DialogContent forceMount asChild variant="fullscreen" className="flex flex-col">
                  <motion.div
                    initial={{ x: "0%", y: "-100%" }}
                    animate={{ x: "0%", y: "0%" }}
                    exit={{ x: "0%", y: "-100%" }}
                    transition={{ duration: DIALOG_ANIMATION_DURATION }}
                  >
                    <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-stretch justify-end gap-10 px-6 py-4 lg:px-20">
                      <DialogTitle className="sr-only text-4.5xl xl:not-sr-only">
                        The Natural Capital Primer Contents
                      </DialogTitle>
                      <DialogClose asChild>
                        <Button
                          type="button"
                          variant="white"
                          size="sm"
                          className="ml-auto pl-2.5 pr-[18px]"
                        >
                          <Close
                            aria-hidden="true"
                            className="mr-2.5 h-5 w-5 rounded-full border border-black bg-black text-white"
                          />
                          <span className="text-base">
                            <HoverRepeatAnimation>Close</HoverRepeatAnimation>
                          </span>
                        </Button>
                      </DialogClose>
                    </div>
                    <ul className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-x-20 gap-y-10 p-6 text-2xl lg:px-20 xl:flex-row xl:text-[24px]">
                      <li className="xl:w-[calc((100%_-_2_*_theme(spacing.20))_/_3)]">
                        <ul className="flex flex-col gap-y-10 xl:mt-10">
                          <li className="border-t border-t-black pt-4">
                            <Link href="/">
                              <HoverRepeatAnimation>Home</HoverRepeatAnimation>
                            </Link>
                          </li>
                          <li className="border-t border-t-black pt-4">
                            <Link href="/about">
                              <HoverRepeatAnimation>About</HoverRepeatAnimation>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="flex-grow">
                        <MobileOnlyAccordion type="single" collapsible>
                          <ul className="flex flex-col gap-y-4">
                            <li className="border-t border-t-black pt-4 xl:border-b xl:border-t-0 xl:border-b-black xl:pb-4 xl:pt-0 xl:text-base">
                              The Primer
                            </li>
                            <li className="pl-14 xl:pl-0">
                              <ul className="flex flex-col gap-x-20 gap-y-6 xl:flex-row xl:justify-between xl:gap-y-10">
                                <li className="pr-6 text-[24px] xl:hidden">
                                  <Link href="/natural-capital-in-daily-life">
                                    <HoverRepeatAnimation>
                                      Natural Capital in Daily Life
                                    </HoverRepeatAnimation>
                                  </Link>
                                </li>
                                <li className="flex-1 text-[24px]">
                                  <ul className="flex flex-col gap-y-6 xl:gap-y-10">
                                    <li>
                                      <MobileOnlyAccordionItem value="key-concepts">
                                        <MobileOnlyAccordionTrigger
                                          variant="naked"
                                          className="flex w-full items-center justify-between"
                                          href="/key-concepts"
                                        >
                                          Key Concepts <ChevronBold className="h-6 w-6 xl:hidden" />
                                        </MobileOnlyAccordionTrigger>
                                        <MobileOnlyAccordionContent variant="naked">
                                          <ul className="flex flex-col gap-2 pt-3 text-base font-normal">
                                            <li className="xl:hidden">
                                              <Link href="/key-concepts">
                                                <HoverRepeatAnimation>
                                                  Introduction
                                                </HoverRepeatAnimation>
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                href="/key-concepts#assets"
                                                onClick={onClickSubSection}
                                              >
                                                <HoverRepeatAnimation>
                                                  Natural Capital Assets
                                                </HoverRepeatAnimation>
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                href="/key-concepts#flows-of-services"
                                                onClick={onClickSubSection}
                                              >
                                                <HoverRepeatAnimation>
                                                  Flows of Services
                                                </HoverRepeatAnimation>
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                href="/key-concepts#dependencies-and-impacts"
                                                onClick={onClickSubSection}
                                              >
                                                <HoverRepeatAnimation>
                                                  Dependencies and Impacts
                                                </HoverRepeatAnimation>
                                              </Link>
                                            </li>
                                          </ul>
                                        </MobileOnlyAccordionContent>
                                      </MobileOnlyAccordionItem>
                                    </li>
                                    <li className="xl:border-t xl:border-t-black xl:pt-4">
                                      <MobileOnlyAccordionItem value="industry-use-cases">
                                        <MobileOnlyAccordionTrigger
                                          variant="naked"
                                          className="flex w-full items-center justify-between"
                                          href="/industry-use-cases"
                                        >
                                          Industry Use Cases{" "}
                                          <ChevronBold className="h-6 w-6 xl:hidden" />
                                        </MobileOnlyAccordionTrigger>
                                        <MobileOnlyAccordionContent variant="naked">
                                          <ul className="flex flex-col gap-2 pt-3 text-base font-normal">
                                            <li className="xl:hidden">
                                              <Link href="/industry-use-cases">
                                                <HoverRepeatAnimation>
                                                  Introduction
                                                </HoverRepeatAnimation>
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                href="/industry-use-cases#manufacturing"
                                                onClick={onClickSubSection}
                                              >
                                                <HoverRepeatAnimation>
                                                  Manufacturing
                                                </HoverRepeatAnimation>
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
                                                <HoverRepeatAnimation>
                                                  Food Systems
                                                </HoverRepeatAnimation>
                                              </Link>
                                            </li>
                                          </ul>
                                        </MobileOnlyAccordionContent>
                                      </MobileOnlyAccordionItem>
                                    </li>
                                    <li className="xl:border-t xl:border-t-black xl:pt-4">
                                      <MobileOnlyAccordionItem value="climate-and-biodiversity">
                                        <MobileOnlyAccordionTrigger
                                          variant="naked"
                                          className="flex w-full items-center justify-between"
                                          href="/climate-and-biodiversity"
                                        >
                                          Climate & Biodiversity{" "}
                                          <ChevronBold className="h-6 w-6 xl:hidden" />
                                        </MobileOnlyAccordionTrigger>
                                        <MobileOnlyAccordionContent variant="naked">
                                          <ul className="flex flex-col gap-2 pt-3 text-base font-normal">
                                            <li className="xl:hidden">
                                              <Link href="/climate-and-biodiversity">
                                                <HoverRepeatAnimation>
                                                  Introduction
                                                </HoverRepeatAnimation>
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                href="/climate-and-biodiversity#climate"
                                                onClick={onClickSubSection}
                                              >
                                                <HoverRepeatAnimation>
                                                  Natural Capital & Climate Change
                                                </HoverRepeatAnimation>
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                href="/climate-and-biodiversity#biodiversity"
                                                onClick={onClickSubSection}
                                              >
                                                <HoverRepeatAnimation>
                                                  Natural Capital & Biodiversity
                                                </HoverRepeatAnimation>
                                              </Link>
                                            </li>
                                          </ul>
                                        </MobileOnlyAccordionContent>
                                      </MobileOnlyAccordionItem>
                                    </li>
                                  </ul>
                                </li>
                                <li className="flex-1 text-[24px]">
                                  <ul className="flex flex-col gap-y-6 xl:gap-y-10">
                                    <li className="hidden xl:block xl:pb-[7px]">
                                      <Link href="/natural-capital-in-daily-life">
                                        <HoverRepeatAnimation>
                                          Natural Capital in Daily Life
                                        </HoverRepeatAnimation>
                                      </Link>
                                    </li>
                                    <li className="xl:border-t xl:border-t-black xl:pt-4">
                                      <Link href="/resources">
                                        <HoverRepeatAnimation>Resources</HoverRepeatAnimation>
                                      </Link>
                                    </li>
                                    <li className="xl:border-t xl:border-t-black xl:pt-4">
                                      <Link href="/references">
                                        <HoverRepeatAnimation>References</HoverRepeatAnimation>
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </MobileOnlyAccordion>
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
