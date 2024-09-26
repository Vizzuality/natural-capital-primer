import { type ClassValue, clsx } from "clsx";
import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { env } from "@/env.mjs";

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
  if (env.NEXT_PUBLIC_ENABLE_ANALYTICS && "plausible" in window) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.plausible(eventName);
  } else {
    console.info(`Analytics event: "${eventName}". Plausible is not currently enabled.`);
  }
};
