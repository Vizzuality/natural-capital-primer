"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const accordionTriggerVariants = cva("group flex flex-1 items-center bg-white", {
  variants: {
    variant: {
      default:
        "border-t py-10 font-medium transition-all lg:border-none lg:py-0 [&[data-state=open]>svg]:rotate-180 justify-between",
      box: "justify-center py-2 data-[state=open]:py-5 border border-black rounded-3xl data-[state=open]:rounded-b-none data-[state=open]:font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    headerClassName?: string;
  } & VariantProps<typeof accordionTriggerVariants>
>(({ className, variant, headerClassName, children, ...props }, ref) => (
  <AccordionPrimitive.Header className={cn("flex", headerClassName)}>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerVariants({ variant, className }))}
      {...props}
    >
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const accordionContentVariants = cva(
  "text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-white bg-white pt-0 lg:pt-10",
  {
    variants: {
      variant: {
        default: "",
        box: "border border-black border-t-0 rounded-b-3xl px-5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> &
    VariantProps<typeof accordionContentVariants>
>(({ className, variant, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(accordionContentVariants({ variant, className }))}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
