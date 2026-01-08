import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-theme relative mx-auto max-w-3xl overflow-hidden px-4",
        className,
      )}
    >
      <div className="absolute inset-y-0 left-0 w-px bg-neutral-300 dark:bg-neutral-800"></div>
      <div className="absolute inset-y-0 right-0 w-[0.5px] bg-neutral-300 dark:bg-neutral-800"></div>
      {children}
    </div>
  );
};

export default Container;
