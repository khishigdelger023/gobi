/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import cn from "classnames";
import { SingleProductProps } from "./_types";
import { ColorSwitch } from "../switch/color";

export function SingleProduct({
  title,
  image,
  price,
  variants,
}: SingleProductProps) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  return (
    <div className="h-full w-full group/product flex flex-col bg-muted">
      <figure className={cn("w-full flex-1 bg-white relative")}>
        <img
          className="h-full w-full object-cover"
          src={image?.attachment}
          alt={title}
        />
      </figure>
      <div className="px-4 py-2 flex justify-between items-center text-sm">
        <p className="line-clamp-2 truncate flex-1">{title}</p>
        <p className="shrink-0">${price}</p>
      </div>
      <div className="px-4">
        <ColorSwitch
          size={"xs"}
          variants={variants}
          selected={selectedVariant}
          refine={setSelectedVariant}
        />
      </div>
    </div>
  );
}
