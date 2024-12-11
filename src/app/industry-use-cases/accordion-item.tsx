import { IndustryUseCasesAccordionItem, IndustryUseCasesTab } from "./types";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import ChevronBold from "@/icons/chevron-bold.svg";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCallback, useEffect, forwardRef, useRef, useState } from "react";
import useMediaQuery from "@/hooks/use-media-query";
import EcosystemTab from "./tab-ecosystem";
import DependenciesTab from "./tab-dependencies";
import ImpactsTab from "./tab-impacts";

const ACCORDION_ANIMATION_DURATION = 0.3;
const ACCORDION_EASING_FUNCTION = "easeOut";
const ACCORDION_VARIANTS = {
  visible: { y: "53px" },
  hidden: { y: 0 },
};

const AccordionItemComp = forwardRef(
  (
    {
      id,
      active,
      tab,
      data,
    }: {
      id: string;
      active: boolean;
      tab: IndustryUseCasesTab;
      data: IndustryUseCasesAccordionItem;
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLDivElement | null>(null);
    const isDesktopLg = useMediaQuery("(min-width: 1024px)", false);
    const isDesktopXl = useMediaQuery("(min-width: 1280px)", false);

    const [mainHeaderVisible, setMainHeaderVisible] = useState(true);
    const { scrollY } = useScroll();
    const previousScrollYRef = useRef(0);

    useMotionValueEvent(scrollY, "change", (value) => {
      if (value < previousScrollYRef.current) {
        setMainHeaderVisible(true);
      } else if (value > 106 && value > previousScrollYRef.current) {
        setMainHeaderVisible(false);
      }

      previousScrollYRef.current = value;
    });

    const onClickTab = useCallback(
      () => setTimeout(() => internalRef.current?.scrollIntoView({ behavior: "smooth" }), 10),
      [],
    );

    // Scroll to the top of the accordion's content when the accordion is expanded
    useEffect(() => {
      if (!isDesktopLg || !active) {
        return;
      }

      // The accordion expand/collapse in 200ms so the timeout must be at least 200ms
      setTimeout(() => internalRef.current?.scrollIntoView({ behavior: "smooth" }), 250);
    }, [isDesktopLg, isDesktopXl, active]);

    return (
      <AccordionItem
        id={id}
        value={data.id}
        ref={(value) => {
          if (typeof ref === "function") {
            ref(value);
          } else if (ref !== null) {
            ref.current = value;
          }

          internalRef.current = value;
        }}
      >
        <motion.div
          className="z-30 flex scroll-mt-[53px] flex-col gap-y-11 bg-white py-4 lg:sticky lg:top-[53px] lg:flex-row lg:items-center lg:justify-between lg:gap-x-11 lg:py-7"
          variants={ACCORDION_VARIANTS}
          animate={mainHeaderVisible ? "visible" : "hidden"}
          transition={{
            ease: ACCORDION_EASING_FUNCTION,
            duration: ACCORDION_ANIMATION_DURATION,
          }}
        >
          <AccordionTrigger
            variant="naked"
            className="flex items-start justify-start gap-x-3 lg:items-center"
          >
            <ChevronBold className="h-[34px] w-[34px] flex-shrink-0 rounded-full bg-black/5 p-[5px]" />
            <h2 className="py-0.5 text-left text-xl">{data.title}</h2>
          </AccordionTrigger>
          <AnimatePresence initial={false}>
            {active && (
              <TabsList variant="fill" className="flex-col rounded-[26px] md:flex-row" asChild>
                <motion.div
                  key={data.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <TabsTrigger
                    variant="fill"
                    value="ecosystem"
                    className="w-full lg:px-7"
                    onClick={onClickTab}
                  >
                    Ecosystem
                  </TabsTrigger>
                  <TabsTrigger
                    variant="fill"
                    value="dependencies"
                    className="w-full lg:px-7"
                    onClick={onClickTab}
                  >
                    Dependencies
                  </TabsTrigger>
                  <TabsTrigger
                    variant="fill"
                    value="impacts"
                    className="w-full lg:px-7"
                    onClick={onClickTab}
                  >
                    Impacts
                  </TabsTrigger>
                </motion.div>
              </TabsList>
            )}
          </AnimatePresence>
        </motion.div>
        <AccordionContent>
          {Object.entries(data.tabContent).map(([tabKey, props]) => (
            <TabsContent
              key={tabKey}
              value={tabKey}
              // `forceMount` and the class `data-[state=inactive]:hidden` are used together to make sure
              // there are not scroll jumps when switching from one tab to another so that we can
              // programmatically scroll to the top of the tab
              className="flex flex-col gap-y-10 border-b-2 border-b-black pb-10 text-black data-[state=inactive]:hidden lg:pb-16 lg:pt-10"
              forceMount
            >
              {tabKey === "ecosystem" && (
                <EcosystemTab open={active && tab === "ecosystem"} {...props} />
              )}
              {tabKey === "dependencies" && (
                <DependenciesTab open={active && tab === "dependencies"} {...props} />
              )}
              {tabKey === "impacts" && <ImpactsTab open={active && tab === "impacts"} {...props} />}
            </TabsContent>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  },
);
AccordionItemComp.displayName = "AccordionItemComp";

export default AccordionItemComp;
