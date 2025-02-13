import cn from "classnames";
import { VariantType } from "../_types";

export function ColorSwitch({
  selected,
  refine,
  variants,
  size = "default",
}: {
  selected: VariantType;
  refine: (val: VariantType) => void;
  variants: VariantType[];
  size?: "xs" | "default";
}) {
  return (
    <ul className={cn("flex", size === "xs" ? "space-x-2" : "space-x-4")}>
      {variants.map((variant) => (
        <li key={variant.color}>
          <label
            className={cn(
              "cursor-pointer max-lg:h-5 max-lg:w-5 rounded-full flex items-center justify-center",
              selected.color === variant.color ? "border border-black p-1" : "",
              size === "xs" ? `w-4 h-4` : "w-8 h-8"
            )}
          >
            <div className={cn("w-full h-full rounded-full", variant.color)} />
            <input
              value={variant.color}
              type="radio"
              checked={selected.color === variant.color}
              onChange={() => refine(variant)}
              className="hidden"
            />
          </label>
        </li>
      ))}
    </ul>
  );
}
