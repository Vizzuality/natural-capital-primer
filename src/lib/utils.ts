import { type ClassValue, clsx } from "clsx";
import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { env } from "@/env.mjs";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { analyticsConsentAtom, store } from "@/lib/store";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addPropsToLink = (element: ReactNode, props: object): ReactNode => {
  if (React.isValidElement(element)) {
    if (element.type === Link) {
      return React.cloneElement(element, {
        ...element.props,
        ...props,
      });
    } else if (element.props.children) {
      const newChildren = React.Children.map(element.props.children, (child) =>
        addPropsToLink(child, props),
      );
      return React.cloneElement(element, {}, newChildren);
    }
  }
  return element;
};

export const sendAnalyticsEvent = (eventName: string) => {
  const analyticsConsent = store.get(analyticsConsentAtom);

  if (!!env.NEXT_PUBLIC_GA_TRACKING_ID && analyticsConsent === true) {
    sendGAEvent("event", eventName);
  } else {
    console.info(`Analytics event: "${eventName}". Google Analytics is not currently enabled.`);
  }

  if (!!env.NEXT_PUBLIC_GTM_TRACKING_ID && analyticsConsent === true) {
    sendGTMEvent({ event: eventName });
  } else {
    console.info(`Analytics event: "${eventName}". Google Tag Manager is not currently enabled.`);
  }
};
