import { WishlistBtn } from "@/components/actions/wishlist";
import { Breadcrumb } from "@/components/breadcrumb";
import { Images } from "@/components/images";
import Link from "next/link";
import {
  ColorVariantSection,
  PriceSection,
  ProductDetailSection,
  ReviewSection,
  SizeSection,
} from "./section";
import Image1 from "@/assets/images/BG (1).png";
import Image2 from "@/assets/images/BG (2).png";
import Image3 from "@/assets/images/BG (4).png";
import Image4 from "@/assets/images/BG (5).png";
import Image5 from "@/assets/images/BG (6).png";
import { Badge, BadgeType } from "@/components/badge";
import { AddBagButton } from "@/components/actions/add-bag";
import ArticlesSection from "./section/articles";
import { SingleProductProps } from "@/components/product/_types";
import { SingleProduct } from "@/components/product";

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
      <h3 className="text-6xl py-12 px-16 max-lg:text-3xl max-lg:py-8 max-lg:px-6">
        We recommend
      </h3>
      <ul className="grid grid-cols-products_lg line-clamp-1 overflow-hidden">
        {products.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))}
      </ul>
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

export const products: SingleProductProps[] = [
  {
    id: "1",
    title: "Classic Cashmere Sweater",
    image: {
      id: "img1",
      attachment:
        "https://cdn.shopify.com/s/files/1/1953/2845/files/EU_CN_FW2425_Ecom_0819_EBO3266.jpg?v=1737701666",
    },
    price: 150.0,
    variants: [
      { name: "Beige", color: "bg-[#F5F5DC]" },
      { name: "Charcoal", color: "bg-[#36454F]" },
      { name: "Navy", color: "bg-[#000080]" },
    ],
  },
  {
    id: "2",
    title: "V-Neck Cashmere Cardigan",
    image: {
      id: "img2",
      attachment:
        "https://cdn.shopify.com/s/files/1/1953/2845/files/EU_CN_FW2425_Ecom_0819_EBO3266.jpg?v=1737701666",
    },
    price: 175.0,
    variants: [
      { name: "Beige", color: "bg-[#F5F5DC]" },
      { name: "Charcoal", color: "bg-[#36454F]" },
      { name: "Navy", color: "bg-[#000080]" },
    ],
  },
  {
    id: "3",
    title: "Cashmere Scarf",
    image: {
      id: "img3",
      attachment:
        "https://cdn.shopify.com/s/files/1/1953/2845/files/EU_CN_FW2425_Ecom_0819_EBO3266.jpg?v=1737701666",
    },
    price: 75.0,
    variants: [
      { name: "Beige", color: "bg-[#F5F5DC]" },
      { name: "Charcoal", color: "bg-[#36454F]" },
      { name: "Navy", color: "bg-[#000080]" },
    ],
  },
  {
    id: "4",
    title: "Classic Cashmere Sweater",
    image: {
      id: "img1",
      attachment:
        "https://cdn.shopify.com/s/files/1/1953/2845/files/EU_CN_FW2425_Ecom_0819_EBO3266.jpg?v=1737701666",
    },
    price: 150.0,
    variants: [
      { name: "Beige", color: "bg-[#F5F5DC]" },
      { name: "Charcoal", color: "bg-[#36454F]" },
      { name: "Navy", color: "bg-[#000080]" },
    ],
  },
  {
    id: "5",
    title: "V-Neck Cashmere Cardigan",
    image: {
      id: "img2",
      attachment:
        "https://cdn.shopify.com/s/files/1/1953/2845/files/EU_CN_FW2425_Ecom_0819_EBO3266.jpg?v=1737701666",
    },
    price: 175.0,
    variants: [
      { name: "Beige", color: "bg-[#F5F5DC]" },
      { name: "Charcoal", color: "bg-[#36454F]" },
      { name: "Navy", color: "bg-[#000080]" },
    ],
  },
];
