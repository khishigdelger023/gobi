"use client";
import React, { useState } from "react";
import { ColorSwitch } from "@/components/switch/color";
import { VariantType } from "@/components/_types";

export function ColorVariantSection({ variants }: { variants: VariantType[] }) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  return (
    <div id="color-variants-section" className="space-y-2">
      <p className="text-neutralContent">
        Color: <span className="text-baseContent">{selectedVariant.name}</span>
      </p>
      <ColorSwitch
        size="default"
        variants={variants}
        selected={selectedVariant}
        refine={setSelectedVariant}
      />
    </div>
  );
}
