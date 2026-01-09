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
        "bg-theme relative mx-auto min-h-screen max-w-3xl overflow-hidden px-4",
        className,
      )}
    >
      <div className="absolute inset-y-0 left-0 border-l border-neutral-300 dark:border-neutral-800"></div>
      <div className="absolute inset-y-0 right-0 border-l border-neutral-300 dark:border-neutral-800"></div>
      {children}
    </div>
  );
};

export default Container;
