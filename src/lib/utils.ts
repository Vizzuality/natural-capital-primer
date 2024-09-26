import { type ClassValue, clsx } from "clsx";
import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
