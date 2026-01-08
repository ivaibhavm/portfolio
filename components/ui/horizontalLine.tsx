import { cn } from "@/lib/utils";

const HorizontalLine = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-x-0 h-px w-full bg-neutral-300 dark:bg-neutral-800",
        className,
      )}
    />
  );
};

export default HorizontalLine;
