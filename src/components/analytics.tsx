"use client";

import { useAtomValue } from "jotai";
import { GoogleAnalytics } from "@next/third-parties/google";
import { analyticsConsentAtom } from "@/lib/store";
import { env } from "@/env.mjs";

const Analytics = () => {
  const analyticsConsent = useAtomValue(analyticsConsentAtom);

  if (!env.NEXT_PUBLIC_GA_TRACKING_ID || analyticsConsent !== true) {
    return null;
  }

  return <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_TRACKING_ID} />;
};

export default Analytics;
