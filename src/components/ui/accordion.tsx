import * as React from "react";
import { cn } from "../../lib/utils";
import { ChevronDown } from "lucide-react";

import {
  Accordion as AccordionRoot,
  AccordionItem as Item,
  AccordionTrigger as Trigger,
  AccordionContent as Content
} from "@radix-ui/react-accordion";

const Accordion = AccordionRoot;
const AccordionItem = Item;
const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ children, className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex w-full items-center justify-between py-2 px-4 bg-gray-100 hover:bg-gray-200 text-left rounded-md",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4" />
  </button>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 border-t border-gray-300", className)}
    {...props}
  >
    {children}
  </div>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
