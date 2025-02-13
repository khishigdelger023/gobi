"use client";
import React, { useState } from "react";
import cn from "classnames";
import { VariantType } from "../page";

export function ColorVariantSection({ variants }: { variants: VariantType[] }) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  return (
    <div id="color-variants-section" className="space-y-2">
      <p className="text-neutralContent">
        Color: <span className="text-baseContent">{selectedVariant.name}</span>
      </p>
      <ul className="flex space-x-4">
        {variants.map((variant) => (
          <li key={variant.color}>
            <label
              className={cn(
                "cursor-pointer w-8 h-8 max-lg:h-5 max-lg:w-5 rounded-full flex items-center justify-center",
                selectedVariant.color === variant.color
                  ? "border border-black p-1"
                  : ""
              )}
            >
              <div
                className={cn("w-full h-full rounded-full", variant.color)}
              />
              <input
                value={variant.color}
                type="radio"
                checked={selectedVariant.color === variant.color}
                onChange={() => setSelectedVariant(variant)}
                className="hidden"
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
