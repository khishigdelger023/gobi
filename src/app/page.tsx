/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Images } from "@/components/images";
import Image1 from "@/assets/images/BG (1).png";
import Image2 from "@/assets/images/BG (2).png";
import Image3 from "@/assets/images/BG (4).png";
import Image4 from "@/assets/images/BG (5).png";
import Image5 from "@/assets/images/BG (6).png";
import FitFinderImage from "@/assets/images/FitFinder.png";
import { Breadcrumb } from "@/components/breadcrumb";
import { WishlistBtn } from "@/components/actions/wishlist";
import StarFilledIcon from "@/assets/icons/star-filled.svg";
import { WarningBadge } from "@/components/badges/warning";
import cn from "classnames";

export default function ProductPage() {
  return (
    <div className="grid grid-cols-3 gap-24 pr-20">
      <section className="col-span-2">
        <Images images={productData.images} alt="product-images" />
      </section>
      <section className="pt-20 space-y-6">
        <div className="flex justify-between items-center">
          <Breadcrumb
            items={[{ title: "Women" }, { title: "The Organic Collection" }]}
          />
          <WishlistBtn />
        </div>
        <article className="text-4xl text-pretty">
          Reborn Cashmere Turtle Neck with Cable Stitches
        </article>
        <ReviewSection />
        <PriceSection />
        <span className="text-neutralContent text-xs">
          Inkl. MwSt. zzgl. Versandkosten
        </span>
        <div className="flex gap-4 text-xs">
          <WarningBadge text="This is Promo Text" />
          <button className="bg-secondary text-white px-2 py-1 rounded">
            CashmereReborn &#8595;
          </button>
        </div>
        <ColorSwitch variants={productData.variants} />
        <SizeSwitch sizes={productData.sizes} />
        <button className="bg-secondary text-white rounded w-full py-3">
          Add to Bag
        </button>
      </section>
    </div>
  );
}

function ReviewSection() {
  return (
    <ul className="flex gap-2 items-center text-xs">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i}>
          <StarFilledIcon className="size-4" />
        </li>
      ))}
      <span>6 reviews</span>
    </ul>
  );
}

function PriceSection() {
  return (
    <div className="text-2xl flex gap-2.5">
      $ 173.40
      <p className="text-neutralContent line-through">$289.00</p>
      <WarningBadge text="-40%" />
    </div>
  );
}

function ColorSwitch({ variants }: { variants: VariantType[] }) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  return (
    <div className="space-y-2">
      <p className="text-neutralContent">
        Color: <span className="text-baseContent">{selectedVariant.name}</span>
      </p>
      <ul className="flex space-x-4">
        {variants.map((variant) => (
          <li key={variant.color}>
            <label
              className={cn(
                "cursor-pointer w-8 h-8 rounded-full flex items-center justify-center",
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

function SizeSwitch({ sizes }: { sizes: { size: string; stock: number }[] }) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-neutralContent">
          Selected size:{" "}
          <span className="text-baseContent">{selectedSize.size}</span>
        </p>
        <div className="flex gap-4">
          <button className="underline">Find My Size</button>
          <button className="underline">Size Guide</button>
        </div>
      </div>
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
  );
}

type VariantType = {
  name: string;
  color: string;
};

const productData = {
  id: "1",
  name: "Product Name",
  brand: {
    id: "1",
    name: "Brand Name",
  },
  images: [Image1.src, Image2.src, Image3.src, Image4.src, Image5.src],
  variants: [
    {
      name: "Seafoam",
      color: "bg-[#3467C2]",
    },
    {
      name: "Wine",
      color: "bg-[#713A41]",
    },
    {
      name: "Sunflower",
      color: "bg-[#EED34E]",
    },
    {
      name: "Ash",
      color: "bg-[#8C8B7D]",
    },
    {
      name: "Teal",
      color: "bg-[#3B8589]",
    },
    {
      name: "Mint",
      color: "bg-[#AAC584]",
    },
    {
      name: "Sand",
      color: "bg-[#EDEAB8]",
    },
  ],
  sizes: [
    { size: "36", stock: 5 },
    { size: "37", stock: 0 },
    { size: "38", stock: 10 },
    { size: "39", stock: 3 },
    { size: "40", stock: 8 },
  ],
};
