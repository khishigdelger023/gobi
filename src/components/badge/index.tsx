import { ReactNode } from "react";
import cn from "classnames";

export enum BadgeType {
  Warning = "warning",
  Accent = "accent",
  Success = "success",
  Info = "info",
  Error = "error",
  Primary = "primary",
}

type BadgeProps = {
  text: string;
  className?: string;
  icon?: ReactNode;
  type?: BadgeType;
};

const typeStyles: Record<BadgeType, string> = {
  [BadgeType.Warning]: "bg-warning text-baseContent",
  [BadgeType.Accent]: "bg-accent text-baseContent",
  [BadgeType.Success]: "bg-success text-baseContent",
  [BadgeType.Info]: "bg-teal-300 text-white",
  [BadgeType.Error]: "bg-red-500 text-white",
  [BadgeType.Primary]: "bg-primary text-white",
};

export function Badge({
  text,
  icon,
  className,
  type = BadgeType.Warning,
}: BadgeProps) {
  return (
    <span
      className={cn(
        className,
        "flex items-center rounded transition-all duration-300 px-2 py-1",
        typeStyles[type]
      )}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </span>
  );
}
