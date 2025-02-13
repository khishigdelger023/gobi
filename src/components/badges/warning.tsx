import cn from "classnames";

export function WarningBadge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={cn(className, "bg-warning px-2 py-1 rounded")}>
      {text}
    </span>
  );
}
