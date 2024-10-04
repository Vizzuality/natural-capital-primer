import { type ClassValue, clsx } from "clsx";
import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { env } from "@/env.mjs";
import { sendGAEvent } from "@next/third-parties/google";

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
  if (!!env.NEXT_PUBLIC_GA_TRACKING_ID) {
    sendGAEvent("event", eventName);
  } else {
    console.info(`Analytics event: "${eventName}". Google Analytics is not currently enabled.`);
  }
};
