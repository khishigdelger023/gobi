/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import FitFinderImage from "@/assets/images/FitFinder.png";
import cn from "classnames";

export function SizeSection({
  sizes,
}: {
  sizes: { size: string; stock: number }[];
}) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div id="size-section" className="space-y-2">
      <div className="flex justify-between flex-wrap items-center">
        <p className="text-neutralContent">
          Selected size:{" "}
          <span className="text-baseContent">{selectedSize.size}</span>
        </p>
        <div className="flex gap-4">
          <button className="underline">Find My Size</button>
          <button className="underline">Size Guide</button>
        </div>
      </div>
      <div className="space-y-6">
        <ul className="grid grid-cols-[repeat(auto-fit,60px)] gap-4">
          {sizes.map(({ size, stock }) => (
            <li key={size}>
              <label
                className={cn(
                  "cursor-pointer w-full py-2 rounded-md flex items-center justify-center",
                  selectedSize.size === size
                    ? "border border-black"
                    : "border border-gray-300",
                  stock === 0 ? "opacity-50 cursor-not-allowed" : ""
                )}
              >
                <input
                  value={size}
                  type="radio"
                  checked={selectedSize.size === size}
                  onChange={() => {
                    if (stock > 0) {
                      setSelectedSize({ size, stock });
                    }
                  }}
                  className="hidden"
                  disabled={stock === 0} // Disable if stock is 0
                />
                <span className="text-baseContent">{size}</span>
              </label>
            </li>
          ))}
        </ul>
        <img src={FitFinderImage.src} alt="fit-finder-image" />
        {selectedSize.stock > 0 ? (
          <p className="ml-2 text-sm text-neutralContent text-center">
            Only {selectedSize.stock} left!
          </p>
        ) : (
          <span className="ml-2 text-sm text-red-600">Out of Stock</span>
        )}
      </div>
    </div>
  );
}
