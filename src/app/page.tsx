import { Images } from "@/components/images";
import Image1 from "@/assets/images/BG (1).png";
import Image2 from "@/assets/images/BG (2).png";
import Image3 from "@/assets/images/BG (4).png";
import Image4 from "@/assets/images/BG (5).png";
import Image5 from "@/assets/images/BG (6).png";
import { Breadcrumb } from "@/components/breadcrumb";
import { WishlistBtn } from "@/components/actions/wishlist";
import StarFilledIcon from "@/assets/icons/star-filled.svg";
import { SizeSection } from "./sections/size";
import { ColorVariantSection } from "./sections/color";
import { Badge, BadgeType } from "@/components/badge";
import { AddBagButton } from "@/components/actions/add-bag";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="lg:grid grid-cols-3 lg:gap-24 lg:pr-20 relative">
      <section className="col-span-2">
        <Images images={productData.images} alt="product-images" />
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
        <ReviewSection />
        <PriceSection />
        <span className="text-neutralContent text-xs">
          Inkl. MwSt. zzgl. Versandkosten
        </span>
        <div className="flex gap-4 text-xs">
          <Badge text="This is Promo Text" />
          <button className="bg-secondary text-white px-2 py-1 rounded">
            CashmereReborn &#8595;
          </button>
        </div>
        <ColorVariantSection variants={productData.variants} />
        <SizeSection sizes={productData.sizes} />
        <AddBagButton />
        <div className="flex gap-4 items-center text-neutralContent text-xs">
          <span>Pay within 30 days</span>
          <Badge
            type={BadgeType.Accent}
            text="Klana."
            className="font-bold !rounded-full w-max text-sm"
          />
          <span>No fees. </span>
          <Link href="" className="underline text-baseContent text-sm">
            Learn More...
          </Link>
        </div>
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
      <Badge text="-40%" />
    </div>
  );
}

export type VariantType = {
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
