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
import Image1 from "@/assets/images/BG (1).png";
import Image2 from "@/assets/images/BG (2).png";
import Image3 from "@/assets/images/BG (4).png";
import Image4 from "@/assets/images/BG (5).png";
import Image5 from "@/assets/images/BG (6).png";
import { Badge, BadgeType } from "@/components/badge";
import { AddBagButton } from "@/components/actions/add-bag";

export default function ProductPage() {
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
}

export type VariantType = {
  name: string;
  color: string;
};

export const product = {
  id: "1",
  name: "Product Name",
  brand: {
    id: "1",
    name: "Brand Name",
  },
  images: [Image1.src, Image2.src, Image3.src, Image4.src, Image5.src],
  variants: [
    { name: "Seafoam", color: "bg-[#3467C2]" },
    { name: "Wine", color: "bg-[#713A41]" },
    { name: "Sunflower", color: "bg-[#EED34E]" },
    { name: "Ash", color: "bg-[#8C8B7D]" },
    { name: "Teal", color: "bg-[#3B8589]" },
    { name: "Mint", color: "bg-[#AAC584]" },
    { name: "Sand", color: "bg-[#EDEAB8]" },
  ],
  sizes: [
    { size: "36", stock: 5 },
    { size: "37", stock: 0 },
    { size: "38", stock: 10 },
    { size: "39", stock: 3 },
    { size: "40", stock: 8 },
  ],
  description:
    "This turtle neck sweater has a relaxed fit and timeless color. An engaging design twist has been applied with asymmetric stitch details. Elegant yet classic and trendy with its own design feature. This piece can be tucked into everything from tailoring to faded jeans or a leather midi skirt.",
  productDetails: [
    { name: "neckType", description: "T-neck" },
    { name: "material", description: "100% Mongolian cashmere" },
    { name: "weight", description: "525 grams" },
    { name: "ply", description: "8 ply" },
    { name: "gauge", description: "3.5 gauge" },
    { name: "stitchTypes", description: "Cable stitch, Fisherman rib stitch" },
    { name: "fit", description: "Loose fit" },
  ],
};
