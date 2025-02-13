"use client";
import { WishlistBtn } from "@/components/actions/wishlist";
import { Breadcrumb } from "@/components/breadcrumb";
import { Images } from "@/components/images";
import Link from "next/link";
import {
  ColorVariantSection,
  PriceSection,
  ProductDetailSection,
  RatingSection,
  SizeSection,
  ProductsSection,
  ArticlesSection,
  ReviewAndCommentsSection,
} from "./section";

import { Badge, BadgeType } from "@/components/badge";
import { AddBagButton } from "@/components/actions/add-bag";
import { ProductType } from "./_types";


export const ProductPageClient = ({ product }: { product: ProductType }) => {
  const { images, variants, sizes } = product;

  return (
    <>
      <div className="lg:grid grid-cols-3 lg:gap-24 lg:pr-20 relative">
        <section className="col-span-2">
          <Images images={images} alt="product-images" />
        </section>
        <section className="lg:pt-20 max-lg:p-6 lg:space-y-6 space-y-4">
          <div className="flex justify-between items-center">
            <Breadcrumb
              items={[{ title: "Women" }, { title: "The Organic Collection" }]}
            />
            <WishlistBtn className="max-lg:absolute top-4 right-4" />
          </div>
          <article className="text-4xl max-lg:text-2xl text-pretty">
            Reborn Cashmere Turtle Neck with Cable Stitches
          </article>
          <RatingSection />
          <PriceSection />
          <span className="text-neutralContent text-xs">
            Inkl. MwSt. zzgl. Versandkosten
          </span>
          <div className="flex gap-4 text-xs">
            <Badge text="This is Promo Text" />
            <Link
              href="#cashmere_reborn"
              className="bg-secondary text-white px-2 py-1 rounded transition-transform hover:scale-105"
            >
              CashmereReborn &#8595;
            </Link>
          </div>
          <ColorVariantSection variants={variants} />
          <SizeSection sizes={sizes} />
          <AddBagButton />
          <div className="flex gap-4 items-center text-neutralContent text-xs">
            <span>Pay within 30 days</span>
            <Badge
              type={BadgeType.Accent}
              text="Klana."
              className="font-bold !rounded-full w-max text-sm"
            />
            <span>No fees. </span>
            <Link href="#" className="underline text-baseContent text-sm">
              Learn More...
            </Link>
          </div>
          <div className="flex gap-4 items-center text-neutralContent text-xs">
            <p>
              or <span className="text-baseContent"> 4 </span> interest-free
              payments of <span className="text-baseContent"> $ 43.35 </span>{" "}
              with
            </p>
            <Badge
              type={BadgeType.Success}
              text="Afterpay"
              className="font-bold !rounded-full w-max text-sm"
            />
            <span className="text-base">&#128712;</span>
          </div>
        </section>
        <ProductDetailSection />
      </div>
      <ArticlesSection />
      <ProductsSection />
      <ReviewAndCommentsSection />
    </>
  );
};
