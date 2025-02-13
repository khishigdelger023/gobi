import { ProductPageClient } from "./client";
import Image1 from "@/assets/images/BG (1).png";
import Image2 from "@/assets/images/BG (2).png";
import Image3 from "@/assets/images/BG (4).png";
import Image4 from "@/assets/images/BG (5).png";
import Image5 from "@/assets/images/BG (6).png";
import { ProductType } from "./_types";

export const product: ProductType = {
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

export default async function ProductPage() {
  return <ProductPageClient product={product} />;
}
