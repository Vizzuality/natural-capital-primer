"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { analyticsConsentAtom } from "@/lib/store";
import { env } from "@/env.mjs";

const MotionAlert = motion.create(Alert);

const PrivacyBanner = () => {
  const [analyticsConsent, setAnalyticsConsent] = useAtom(analyticsConsentAtom);
  const isVisible = !!env.NEXT_PUBLIC_GA_TRACKING_ID && analyticsConsent === undefined;

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionAlert
          className="fixed bottom-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-20">
            <AlertTitle className="sr-only">Privacy consent</AlertTitle>
            <AlertDescription>
              Do you accept analytics cookies to improve your browsing experience? Read more on the{" "}
              <Link className="font-bold underline" href="/terms-and-conditions">
                Terms & Conditions
              </Link>
              .
            </AlertDescription>
            <div className="flex shrink-0 gap-x-3">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setAnalyticsConsent(false)}
              >
                Deny
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setAnalyticsConsent(true)}
              >
                Accept
              </Button>
            </div>
          </div>
        </MotionAlert>
      )}
    </AnimatePresence>
  );
};

export default PrivacyBanner;
