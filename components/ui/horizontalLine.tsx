import { cn } from "@/lib/utils";

const HorizontalLine = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-x-0 w-full border-t border-neutral-300 dark:border-neutral-800",
        className,
      )}
    />
  );
};

export default HorizontalLine;
