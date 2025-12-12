"use client";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { useAtomValue } from "jotai";

import { env } from "@/env.mjs";
import { analyticsConsentAtom } from "@/lib/store";

const Analytics = () => {
  const analyticsConsent = useAtomValue(analyticsConsentAtom);

  if (analyticsConsent !== true) {
    return null;
  }

  return (
    <>
      {!!env.NEXT_PUBLIC_GA_TRACKING_ID && (
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_TRACKING_ID} />
      )}
      {!!env.NEXT_PUBLIC_GTM_TRACKING_ID && (
        <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_TRACKING_ID} />
      )}
    </>
  );
};

export default Analytics;
